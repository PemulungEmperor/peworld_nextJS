import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const email = body.email;
    const password = body.password;

    const employee = await prisma.employee.findUnique({ where: { email } });

    if (!employee) {
      return NextResponse.json({ message: "invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, employee.password);
    if (!passwordMatch) {
      return NextResponse.json({ message: "invalid credentials" });
    }

    // if match, get token
    const accessToken = jwt.sign({ id: employee.id, username: employee.username, role: employee.role }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    // set cookies
    cookies().set("cookies", accessToken);

    return NextResponse.json({ id: employee.id, username: employee.username, role: employee.role, accessToken, message: "Login successfully" });
  } catch (err) {
    return NextResponse.json({ message: err.message });
  }
};
