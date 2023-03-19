/*
  Warnings:

  - The `field` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `mentor` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "field",
ADD COLUMN     "field" TEXT[],
ALTER COLUMN "mentor" SET NOT NULL;
