import { NextResponse } from "next/server";
import { prisma } from "../../config/db";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const sort = searchParams.get("sort") || "username";

    // search post prisma
    const employees = await prisma.employee.findMany({
      where: {
        username: {
          contains: query,
          mode: "insensitive",
        },
      },
      orderBy: {
        [sort]: "asc",
      },
    });

    return NextResponse.json({ employees });
  } catch (e) {
    return NextResponse.json({ message: e });
  }
}
