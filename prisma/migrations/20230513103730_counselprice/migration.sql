/*
  Warnings:

  - You are about to drop the column `counselPrice` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "counselPrice",
ADD COLUMN     "counselPriceHigh" INTEGER,
ADD COLUMN     "counselPriceLow" INTEGER;
