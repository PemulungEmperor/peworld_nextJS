import { NextResponse } from "next/server";
import { prisma } from "../../config/db";

// get review
export const GET = async () => {
  const review = await prisma.static_review.findMany();
  return NextResponse.json({ review });
};
