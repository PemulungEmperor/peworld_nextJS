/*
  Warnings:

  - You are about to drop the column `app` on the `portfolio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "portfolio" DROP COLUMN "app",
ADD COLUMN     "app_name" TEXT,
ADD COLUMN     "app_url" TEXT,
ADD COLUMN     "photo_path" TEXT;
