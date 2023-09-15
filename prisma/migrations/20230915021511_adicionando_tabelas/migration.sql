/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - Added the required column `cep` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `address`,
    ADD COLUMN `cep` INTEGER NOT NULL,
    ADD COLUMN `neighborhood` VARCHAR(191) NOT NULL,
    ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL;
