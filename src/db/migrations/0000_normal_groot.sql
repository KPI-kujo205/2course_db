-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Action` (
	`id` int NOT NULL,
	`date` date NOT NULL,
	`Poll_id` int NOT NULL,
	`Grant_id` int(10) unsigned zerofill NOT NULL,
	`State_id` int NOT NULL,
	CONSTRAINT `Action_id_Poll_id_Grant_id_State_id_pk` PRIMARY KEY(`id`,`Poll_id`,`Grant_id`,`State_id`)
);
--> statement-breakpoint
CREATE TABLE `Answer` (
	`id` int NOT NULL,
	`field` blob NOT NULL,
	`Question_id` int NOT NULL,
	CONSTRAINT `Answer_id_Question_id_pk` PRIMARY KEY(`id`,`Question_id`)
);
--> statement-breakpoint
CREATE TABLE `EarnedMoney` (
	`id` int AUTO_INCREMENT NOT NULL,
	`date` date NOT NULL,
	`amount` int NOT NULL,
	`tookAway` tinyint NOT NULL,
	`User_id` int NOT NULL,
	`Poll_id` int NOT NULL,
	CONSTRAINT `EarnedMoney_id_User_id_Poll_id_pk` PRIMARY KEY(`id`,`User_id`,`Poll_id`)
);
--> statement-breakpoint
CREATE TABLE `Grant` (
	`id` int(10) unsigned zerofill NOT NULL,
	`assignedAt` date NOT NULL,
	`Role_id` int NOT NULL,
	`User_id` int NOT NULL,
	`Answer_id` int,
	`Answer_Question_id` int,
	`Poll_id` int,
	CONSTRAINT `Grant_id_Role_id_User_id_pk` PRIMARY KEY(`id`,`Role_id`,`User_id`)
);
--> statement-breakpoint
CREATE TABLE `Poll` (
	`id` int NOT NULL,
	`title` mediumtext NOT NULL,
	`description` longtext NOT NULL,
	CONSTRAINT `Poll_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Qualification` (
	`id` int NOT NULL,
	`level` int NOT NULL,
	`User_id` int NOT NULL,
	`Specialty_id` int NOT NULL,
	CONSTRAINT `Qualification_id_User_id_Specialty_id_pk` PRIMARY KEY(`id`,`User_id`,`Specialty_id`)
);
--> statement-breakpoint
CREATE TABLE `Question` (
	`id` int NOT NULL,
	`type` mediumtext NOT NULL,
	`text` longtext NOT NULL,
	`Poll_id` int NOT NULL,
	CONSTRAINT `Question_id_Poll_id_pk` PRIMARY KEY(`id`,`Poll_id`)
);
--> statement-breakpoint
CREATE TABLE `Role` (
	`id` int NOT NULL,
	`name` tinytext NOT NULL,
	CONSTRAINT `Role_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Specialty` (
	`id` int NOT NULL,
	`name` mediumtext NOT NULL,
	CONSTRAINT `Specialty_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `State` (
	`id` int NOT NULL,
	`text` longtext NOT NULL,
	`type` mediumtext NOT NULL,
	CONSTRAINT `State_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` int NOT NULL,
	`mail` mediumtext NOT NULL,
	`password` mediumtext NOT NULL,
	`name` mediumtext NOT NULL,
	`age` int,
	`gender` mediumtext,
	CONSTRAINT `User_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `fk_Action_Grant1_idx` ON `Action` (`Grant_id`);--> statement-breakpoint
CREATE INDEX `fk_Action_Poll1_idx` ON `Action` (`Poll_id`);--> statement-breakpoint
CREATE INDEX `fk_Action_State1_idx` ON `Action` (`State_id`);--> statement-breakpoint
CREATE INDEX `fk_Answer_Question_idx` ON `Answer` (`Question_id`);--> statement-breakpoint
CREATE INDEX `fk_EarnedMoney_Poll1_idx` ON `EarnedMoney` (`Poll_id`);--> statement-breakpoint
CREATE INDEX `fk_EarnedMoney_User1_idx` ON `EarnedMoney` (`User_id`);--> statement-breakpoint
CREATE INDEX `fk_Grant_Answer1_idx` ON `Grant` (`Answer_id`,`Answer_Question_id`);--> statement-breakpoint
CREATE INDEX `fk_Grant_Poll1_idx` ON `Grant` (`Poll_id`);--> statement-breakpoint
CREATE INDEX `fk_Grant_Role1_idx` ON `Grant` (`Role_id`);--> statement-breakpoint
CREATE INDEX `fk_Grant_User1_idx` ON `Grant` (`User_id`);--> statement-breakpoint
CREATE INDEX `fk_Qualification_Specialty1_idx` ON `Qualification` (`Specialty_id`);--> statement-breakpoint
CREATE INDEX `fk_Qualification_User1_idx` ON `Qualification` (`User_id`);--> statement-breakpoint
CREATE INDEX `fk_Question_Poll1_idx` ON `Question` (`Poll_id`);--> statement-breakpoint
ALTER TABLE `Action` ADD CONSTRAINT `fk_Action_Grant1` FOREIGN KEY (`Grant_id`) REFERENCES `Grant`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Action` ADD CONSTRAINT `fk_Action_Poll1` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Action` ADD CONSTRAINT `fk_Action_State1` FOREIGN KEY (`State_id`) REFERENCES `State`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Answer` ADD CONSTRAINT `fk_Answer_Question` FOREIGN KEY (`Question_id`) REFERENCES `Question`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `EarnedMoney` ADD CONSTRAINT `fk_EarnedMoney_Poll1` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `EarnedMoney` ADD CONSTRAINT `fk_EarnedMoney_User1` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `fk_Grant_Answer1` FOREIGN KEY (`Answer_id`,`Answer_Question_id`) REFERENCES `Answer`(`id`,`Question_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `fk_Grant_Poll1` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `fk_Grant_Role1` FOREIGN KEY (`Role_id`) REFERENCES `Role`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Grant` ADD CONSTRAINT `fk_Grant_User1` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Qualification` ADD CONSTRAINT `fk_Qualification_Specialty1` FOREIGN KEY (`Specialty_id`) REFERENCES `Specialty`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Qualification` ADD CONSTRAINT `fk_Qualification_User1` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Question` ADD CONSTRAINT `fk_Question_Poll1` FOREIGN KEY (`Poll_id`) REFERENCES `Poll`(`id`) ON DELETE no action ON UPDATE no action;
*/