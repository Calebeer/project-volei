/*
  Warnings:

  - You are about to drop the `farmacia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `farmacia`;

-- CreateTable
CREATE TABLE `remedio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `preco` VARCHAR(191) NOT NULL,
    `quantidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
