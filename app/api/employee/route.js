import { NextResponse } from "next/server";
import { prisma } from "../../config/db";

// get employee
export const GET = async () => {
  const employee = await prisma.employee.findMany();
  return NextResponse.json({ employee });
};
