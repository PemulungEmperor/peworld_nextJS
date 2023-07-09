/*
  Warnings:

  - Added the required column `app` to the `portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolio" ADD COLUMN     "app" JSONB NOT NULL;
