-- CreateTable
CREATE TABLE "static_review" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "profession" TEXT,
    "review" TEXT,

    CONSTRAINT "static_review_pkey" PRIMARY KEY ("id")
);
