import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

// register company
export const POST = async (req, res) => {
  const body = await req.json();
  // hash password
  const password = body.password;
  const hashPassword = await bcrypt.hash(password, 10);
  // model integration
  const company = await prisma.company.create({
    data: {
      username: body.username,
      email: body.email,
      company_name: body.company_name,
      position_company: body.position_company,
      phone: body.phone,
      password: hashPassword,
    },
  });
  return NextResponse.json(company);
};
