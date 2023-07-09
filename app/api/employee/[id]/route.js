import { NextResponse } from "next/server";
import { prisma } from "../../../config/db";

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  const id = params.id;
  // console.log(id);
  const employee = await prisma.employee.update({
    where: {
      id: Number(id),
    },
    data: {
      username: body.username,
      profession: body.profession,
      location: body.location,
      job_title: body.job_title,
      ig: body.ig,
      github: body.github,
      gitlab: body.gitlab,
      employee_desc: body.employee_desc,
    },
  });
  return NextResponse.json({ employee, status: 200 });
};

export const POST = async (req, { params }) => {
  const body = await req.json();
  const id = params.id;
  // console.log(id);
  const employee = await prisma.employee.update({
    where: {
      id: Number(id),
    },
    data: {
      skill: {
        push: body.skill,
      },
    },
  });
  return NextResponse.json({ employee, status: 200 });
};

export const PUT = async (req, { params }) => {
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
