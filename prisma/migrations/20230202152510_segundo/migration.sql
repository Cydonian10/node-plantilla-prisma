/*
  Warnings:

  - You are about to drop the `Auth` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Auth" DROP CONSTRAINT "Auth_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" VARCHAR NOT NULL,
ADD COLUMN     "google" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" VARCHAR NOT NULL;

-- DropTable
DROP TABLE "Auth";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
