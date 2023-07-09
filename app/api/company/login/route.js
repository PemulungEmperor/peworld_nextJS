import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const email = body.email;
    const password = body.password;

    const company = await prisma.company.findUnique({ where: { email } });

    if (!company) {
      return NextResponse.json({ message: "invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, company.password);
    if (!passwordMatch) {
      return NextResponse.json({ message: "invalid credentials" });
    }

    // if match, get token
    const accessToken = jwt.sign({ id: company.id, username: company.username, role: company.role }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json({ id: company.id, username: company.username, role: company.role, accessToken, message: "Login successfully" });
  } catch (err) {
    return NextResponse.json({ message: err.message });
  }
};
