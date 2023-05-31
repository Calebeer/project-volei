-- CreateTable
CREATE TABLE `venda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `nome_remedio` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,

    UNIQUE INDEX `venda_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
