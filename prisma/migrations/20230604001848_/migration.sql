-- CreateTable
CREATE TABLE `remedy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `remedy` ADD CONSTRAINT `remedy_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `remedy_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
