/*
  Warnings:

  - You are about to drop the column `created` on the `education` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `mentorship_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "education" DROP COLUMN "created";

-- AlterTable
ALTER TABLE "job" DROP COLUMN "created",
DROP COLUMN "updated";

-- AlterTable
ALTER TABLE "mentorship_user" DROP COLUMN "updated";
