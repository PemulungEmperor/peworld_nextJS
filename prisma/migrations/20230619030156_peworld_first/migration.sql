-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirm_password" TEXT NOT NULL,
    "photo_path" TEXT NOT NULL,
    "employee_desc" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "skill" TEXT[],
    "soc_med" JSONB NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "position_company" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirm_password" TEXT NOT NULL,
    "photo_path" TEXT NOT NULL,
    "background_path" TEXT NOT NULL,
    "company_field" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "company_desc" TEXT NOT NULL,
    "soc_med" JSONB NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "company_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "date_join" TIMESTAMP(3) NOT NULL,
    "date_off" TIMESTAMP(3) NOT NULL,
    "experience_desc" TEXT NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acquirer" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,
    "purpose_message" TEXT NOT NULL,
    "acquirer_name" TEXT NOT NULL,
    "acquirer_email" TEXT NOT NULL,
    "acquirer_phone" TEXT NOT NULL,
    "acquirer_desc" TEXT NOT NULL,

    CONSTRAINT "acquirer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");

-- AddForeignKey
ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acquirer" ADD CONSTRAINT "acquirer_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acquirer" ADD CONSTRAINT "acquirer_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
