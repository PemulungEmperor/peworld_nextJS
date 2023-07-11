import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../config/db";
import cloudinary from "../../../../utils/cloudinary";

export async function PATCH(request: NextRequest, { params: { id } }) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const path = `./public/tmp/${file.name}`;
  await writeFile(path, buffer);

  const photoCloud = await cloudinary.uploader.upload(path, { folder: "peworld" });
  const response = await prisma.employee.update({
    where: {
      id: Number(id),
    },
    data: {
      photo_path: photoCloud.secure_url,
    },
  });
  console.log(`open ${path} to see the uploaded file`);

  return NextResponse.json({ success: true, message: "success uploaded!", path: response.photo_path });
}
