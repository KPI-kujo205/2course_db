ALTER TABLE `Action` DROP FOREIGN KEY `fk_Action_Grant1`;
--> statement-breakpoint
ALTER TABLE `Action` DROP FOREIGN KEY `fk_Action_Poll1`;
--> statement-breakpoint
ALTER TABLE `Action` DROP FOREIGN KEY `fk_Action_State1`;
--> statement-breakpoint
ALTER TABLE `Answer` DROP FOREIGN KEY `fk_Answer_Question`;
--> statement-breakpoint
ALTER TABLE `EarnedMoney` DROP FOREIGN KEY `fk_EarnedMoney_Poll1`;
--> statement-breakpoint
ALTER TABLE `EarnedMoney` DROP FOREIGN KEY `fk_EarnedMoney_User1`;
--> statement-breakpoint
ALTER TABLE `Grant` DROP FOREIGN KEY `fk_Grant_Poll1`;
--> statement-breakpoint
ALTER TABLE `Grant` DROP FOREIGN KEY `fk_Grant_Role1`;
--> statement-breakpoint
ALTER TABLE `Grant` DROP FOREIGN KEY `fk_Grant_User1`;
--> statement-breakpoint
ALTER TABLE `Qualification` DROP FOREIGN KEY `fk_Qualification_Specialty1`;
--> statement-breakpoint
ALTER TABLE `Qualification` DROP FOREIGN KEY `fk_Qualification_User1`;
--> statement-breakpoint
ALTER TABLE `Question` DROP FOREIGN KEY `fk_Question_Poll1`;
--> statement-breakpoint
ALTER TABLE `Action` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Action` MODIFY COLUMN `Grant_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `Answer` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Grant` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Poll` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Qualification` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Question` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Role` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Specialty` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `State` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `User` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `Action` ADD CONSTRAINT `Action_Poll_id_Poll_id_fk` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Action` ADD CONSTRAINT `Action_Grant_id_Grant_id_fk` FOREIGN KEY (`Grant_id`) REFERENCES `Grant`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Action` ADD CONSTRAINT `Action_State_id_State_id_fk` FOREIGN KEY (`State_id`) REFERENCES `State`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_Question_id_Question_id_fk` FOREIGN KEY (`Question_id`) REFERENCES `Question`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `EarnedMoney` ADD CONSTRAINT `EarnedMoney_User_id_User_id_fk` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `EarnedMoney` ADD CONSTRAINT `EarnedMoney_Poll_id_Poll_id_fk` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `Grant_Role_id_Role_id_fk` FOREIGN KEY (`Role_id`) REFERENCES `Role`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `Grant_User_id_User_id_fk` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `Grant_Poll_id_Poll_id_fk` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Qualification` ADD CONSTRAINT `Qualification_User_id_User_id_fk` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Qualification` ADD CONSTRAINT `Qualification_Specialty_id_Specialty_id_fk` FOREIGN KEY (`Specialty_id`) REFERENCES `Specialty`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Question` ADD CONSTRAINT `Question_Poll_id_Poll_id_fk` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Answer` DROP COLUMN `field`;