import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

// register employee
export const POST = async (req, res) => {
  const body = await req.json();
  // hash password
  const password = body.password;
  const hashPassword = await bcrypt.hash(password, 10);
  // model integration
  const employee = await prisma.employee.create({
    data: {
      username: body.username,
      email: body.email,
      phone: body.phone,
      password: hashPassword,
    },
  });
  return NextResponse.json(employee);
};
