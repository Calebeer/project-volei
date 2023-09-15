-- DropIndex
DROP INDEX `User_cep_key` ON `User`;

-- AlterTable
ALTER TABLE `User` MODIFY `cep` VARCHAR(191) NOT NULL,
    MODIFY `number` VARCHAR(191) NOT NULL;
