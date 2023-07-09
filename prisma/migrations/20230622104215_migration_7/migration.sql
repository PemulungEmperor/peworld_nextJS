-- AlterTable
ALTER TABLE "company" ALTER COLUMN "ig" DROP NOT NULL,
ALTER COLUMN "linkedIn" DROP NOT NULL;

-- AlterTable
ALTER TABLE "experience" ALTER COLUMN "logo_path" DROP NOT NULL;
