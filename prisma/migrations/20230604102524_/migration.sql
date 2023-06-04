-- AddForeignKey
ALTER TABLE `Scheduling` ADD CONSTRAINT `Scheduling_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
