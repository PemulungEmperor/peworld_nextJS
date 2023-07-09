/*
  Warnings:

  - You are about to drop the column `soc_med` on the `company` table. All the data in the column will be lost.
  - Added the required column `ig` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedIn` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo_path` to the `experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" DROP COLUMN "soc_med",
ADD COLUMN     "ig" TEXT NOT NULL,
ADD COLUMN     "linkedIn" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "experience" ADD COLUMN     "logo_path" TEXT NOT NULL;
