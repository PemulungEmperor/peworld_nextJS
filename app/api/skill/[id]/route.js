import { NextResponse } from "next/server";
import { prisma } from "../../../config/db";

export const POST = async (req, { params }) => {
  const body = await req.json();
  const id = params.id;
  const skills = await prisma.employee.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      skill: true,
    },
  });

  const allSkillResult = skills.skill;
  let deletedSkill = body.skill;
  let result = allSkillResult.filter((item) => item !== deletedSkill);

  const updateSkill = await prisma.employee.update({
    where: {
      id: Number(id),
    },
    data: {
      skill: result,
    },
  });

  return NextResponse.json(updateSkill);
};
