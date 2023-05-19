/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `farmacia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fabricacao` VARCHAR(191) NOT NULL,
    `nome_pessoa` VARCHAR(191) NOT NULL,
    `nome_remedio` VARCHAR(191) NOT NULL,
    `funcionario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
