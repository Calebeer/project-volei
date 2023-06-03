/*
  Warnings:

  - A unique constraint covering the columns `[telephone]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `scheduling` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `hour` TIME NOT NULL,

    UNIQUE INDEX `scheduling_date_key`(`date`),
    UNIQUE INDEX `scheduling_hour_key`(`hour`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_telephone_key` ON `user`(`telephone`);

-- CreateIndex
CREATE UNIQUE INDEX `user_password_key` ON `user`(`password`);
