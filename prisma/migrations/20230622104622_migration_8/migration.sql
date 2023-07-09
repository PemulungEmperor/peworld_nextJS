/*
  Warnings:

  - You are about to drop the column `soc_med` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employee" DROP COLUMN "soc_med",
ADD COLUMN     "github" TEXT,
ADD COLUMN     "gitlab" TEXT,
ADD COLUMN     "ig" TEXT;
