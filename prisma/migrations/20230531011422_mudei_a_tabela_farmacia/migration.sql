/*
  Warnings:

  - You are about to drop the column `fabricacao` on the `farmacia` table. All the data in the column will be lost.
  - You are about to drop the column `funcionario` on the `farmacia` table. All the data in the column will be lost.
  - You are about to drop the column `nome_pessoa` on the `farmacia` table. All the data in the column will be lost.
  - You are about to drop the column `nome_remedio` on the `farmacia` table. All the data in the column will be lost.
  - Added the required column `nome` to the `farmacia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `farmacia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `farmacia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `farmacia` DROP COLUMN `fabricacao`,
    DROP COLUMN `funcionario`,
    DROP COLUMN `nome_pessoa`,
    DROP COLUMN `nome_remedio`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL,
    ADD COLUMN `preco` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantidade` VARCHAR(191) NOT NULL;
