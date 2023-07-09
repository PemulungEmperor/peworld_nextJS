/*
  Warnings:

  - You are about to drop the column `confirm_password` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `confirm_password` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "company" DROP COLUMN "confirm_password",
ALTER COLUMN "photo_path" DROP NOT NULL,
ALTER COLUMN "background_path" DROP NOT NULL,
ALTER COLUMN "company_field" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "company_desc" DROP NOT NULL,
ALTER COLUMN "soc_med" DROP NOT NULL;

-- AlterTable
ALTER TABLE "employee" DROP COLUMN "confirm_password",
ALTER COLUMN "photo_path" DROP NOT NULL,
ALTER COLUMN "employee_desc" DROP NOT NULL,
ALTER COLUMN "profession" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "job_title" DROP NOT NULL,
ALTER COLUMN "soc_med" DROP NOT NULL;
