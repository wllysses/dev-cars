/*
  Warnings:

  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_user_id_fkey";

-- DropTable
DROP TABLE "Car";

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "img_url" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
