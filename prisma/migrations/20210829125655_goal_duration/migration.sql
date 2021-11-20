/*
  Warnings:

  - Added the required column `duration` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `proofType` on the `ResolvedGoal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "duration" JSONB NOT NULL,
ADD COLUMN     "proofTypes" TEXT[];

-- AlterTable
ALTER TABLE "ResolvedGoal" DROP COLUMN "proofType",
ADD COLUMN     "proofType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ProofType";
