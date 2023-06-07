/*
  Warnings:

  - You are about to drop the column `userId` on the `Scheduling` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Scheduling` DROP FOREIGN KEY `Scheduling_userId_fkey`;

-- AlterTable
ALTER TABLE `Scheduling` DROP COLUMN `userId`;
