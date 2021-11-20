/*
  Warnings:

  - You are about to drop the column `resolved` on the `Goal` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProofType" AS ENUM ('PHOTO', 'VIDEO', 'FILE', 'TEXT', 'LINK', 'EMPTY');

-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "resolved";

-- CreateTable
CREATE TABLE "ResolvedGoal" (
    "id" TEXT NOT NULL,
    "goalId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "proof" TEXT,
    "proofType" "ProofType" NOT NULL DEFAULT E'EMPTY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResolvedGoal" ADD FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
