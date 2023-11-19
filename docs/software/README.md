# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
``` sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema opinio
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `opinio` ;

-- -----------------------------------------------------
-- Schema opinio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `opinio` DEFAULT CHARACTER SET utf8 ;
USE `opinio` ;

-- -----------------------------------------------------
-- Table `opinio`.`Poll`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Poll` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Poll` (
  `id` INT NOT NULL,
  `title` MEDIUMTEXT NOT NULL,
  `description` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Question` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Question` (
  `id` INT NOT NULL,
  `type` MEDIUMTEXT NOT NULL,
  `text` LONGTEXT NOT NULL,
  `Poll_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Poll_id`),
  INDEX `fk_Question_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Answer` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Answer` (
  `id` INT NOT NULL,
  `field` BLOB NOT NULL,
  `Question_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Question_id`),
  INDEX `fk_Answer_Question_idx` (`Question_id` ASC) VISIBLE,
  CONSTRAINT `fk_Answer_Question`
    FOREIGN KEY (`Question_id`)
    REFERENCES `opinio`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Role` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Role` (
  `id` INT NOT NULL,
  `name` TINYTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`User` ;

CREATE TABLE IF NOT EXISTS `opinio`.`User` (
  `id` INT NOT NULL,
  `mail` MEDIUMTEXT NOT NULL,
  `password` MEDIUMTEXT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  `age` INT NULL,
  `gender` MEDIUMTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Grant` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Grant` (
  `id` INT ZEROFILL NOT NULL,
  `assignedAt` DATE NOT NULL,
  `Role_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  `Answer_id` INT NULL,
  `Answer_Question_id` INT NULL,
  `Poll_id` INT NULL,
  PRIMARY KEY (`id`, `Role_id`, `User_id`),
  INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
  INDEX `fk_Grant_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Grant_Answer1_idx` (`Answer_id` ASC, `Answer_Question_id` ASC) VISIBLE,
  INDEX `fk_Grant_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `opinio`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `opinio`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_Answer1`
    FOREIGN KEY (`Answer_id` , `Answer_Question_id`)
    REFERENCES `opinio`.`Answer` (`id` , `Question_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`State`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`State` ;

CREATE TABLE IF NOT EXISTS `opinio`.`State` (
  `id` INT NOT NULL,
  `text` LONGTEXT NOT NULL,
  `type` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Action`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Action` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Action` (
  `id` INT NOT NULL,
  `date` DATE NOT NULL,
  `Poll_id` INT NOT NULL,
  `Grant_id` INT ZEROFILL NOT NULL,
  `State_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Poll_id`, `Grant_id`, `State_id`),
  INDEX `fk_Action_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  INDEX `fk_Action_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  INDEX `fk_Action_State1_idx` (`State_id` ASC) VISIBLE,
  CONSTRAINT `fk_Action_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `opinio`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_State1`
    FOREIGN KEY (`State_id`)
    REFERENCES `opinio`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Specialty`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Specialty` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Specialty` (
  `id` INT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Qualification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Qualification` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Qualification` (
  `id` INT NOT NULL,
  `level` INT NOT NULL,
  `User_id` INT NOT NULL,
  `Specialty_id` INT NOT NULL,
  PRIMARY KEY (`id`, `User_id`, `Specialty_id`),
  INDEX `fk_Qualification_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Qualification_Specialty1_idx` (`Specialty_id` ASC) VISIBLE,
  CONSTRAINT `fk_Qualification_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `opinio`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Qualification_Specialty1`
    FOREIGN KEY (`Specialty_id`)
    REFERENCES `opinio`.`Specialty` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`EarnedMoney`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`EarnedMoney` ;

CREATE TABLE IF NOT EXISTS `opinio`.`EarnedMoney` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `amount` INT NOT NULL,
  `tookAway` TINYINT NOT NULL,
  `User_id` INT NOT NULL,
  `Poll_id` INT NOT NULL,
  PRIMARY KEY (`id`, `User_id`, `Poll_id`),
  INDEX `fk_EarnedMoney_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_EarnedMoney_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_EarnedMoney_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `opinio`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EarnedMoney_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## drizzle schema

```ts
import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  index,
  foreignKey,
  primaryKey,
  int,
  date,
  tinyint,
  mediumtext,
  longtext,
  tinytext,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const action = mysqlTable(
  "Action",
  {
    id: int("id").autoincrement().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date("date", { mode: "string" }).notNull(),
    pollId: int("Poll_id")
      .notNull()
      .references(() => poll.id),
    grantId: int("Grant_id")
      .notNull()
      .references(() => grant.id),
    stateId: int("State_id")
      .notNull()
      .references(() => state.id),
  },
  (table) => {
    return {
      fkActionGrant1Idx: index("fk_Action_Grant1_idx").on(table.grantId),
      fkActionPoll1Idx: index("fk_Action_Poll1_idx").on(table.pollId),
      fkActionState1Idx: index("fk_Action_State1_idx").on(table.stateId),
      actionIdPollIdGrantIdStateIdPk: primaryKey({
        columns: [table.id, table.pollId, table.grantId, table.stateId],
        name: "Action_id_Poll_id_Grant_id_State_id_pk",
      }),
    };
  },
);

export const answer = mysqlTable(
  "Answer",
  {
    id: int("id").autoincrement().notNull(),
    // Warning: Can't parse blob from database
    // blobType: blob("field").notNull(),
    questionId: int("Question_id")
      .notNull()
      .references(() => question.id),
  },
  (table) => {
    return {
      fkAnswerQuestionIdx: index("fk_Answer_Question_idx").on(table.questionId),
      answerIdQuestionIdPk: primaryKey({
        columns: [table.id, table.questionId],
        name: "Answer_id_Question_id_pk",
      }),
    };
  },
);

export const earnedMoney = mysqlTable(
  "EarnedMoney",
  {
    id: int("id").autoincrement().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date("date", { mode: "string" }).notNull(),
    amount: int("amount").notNull(),
    tookAway: tinyint("tookAway").notNull(),
    userId: int("User_id")
      .notNull()
      .references(() => user.id),
    pollId: int("Poll_id")
      .notNull()
      .references(() => poll.id),
  },
  (table) => {
    return {
      fkEarnedMoneyPoll1Idx: index("fk_EarnedMoney_Poll1_idx").on(table.pollId),
      fkEarnedMoneyUser1Idx: index("fk_EarnedMoney_User1_idx").on(table.userId),
      earnedMoneyIdUserIdPollIdPk: primaryKey({
        columns: [table.id, table.userId, table.pollId],
        name: "EarnedMoney_id_User_id_Poll_id_pk",
      }),
    };
  },
);

export const grant = mysqlTable(
  "Grant",
  {
    id: int("id").autoincrement().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    assignedAt: date("assignedAt", { mode: "string" }).notNull(),
    roleId: int("Role_id")
      .notNull()
      .references(() => role.id),
    userId: int("User_id")
      .notNull()
      .references(() => user.id),
    answerId: int("Answer_id"),
    answerQuestionId: int("Answer_Question_id"),
    pollId: int("Poll_id").references(() => poll.id),
  },
  (table) => {
    return {
      fkGrantAnswer1Idx: index("fk_Grant_Answer1_idx").on(
        table.answerId,
        table.answerQuestionId,
      ),
      fkGrantPoll1Idx: index("fk_Grant_Poll1_idx").on(table.pollId),
      fkGrantRole1Idx: index("fk_Grant_Role1_idx").on(table.roleId),
      fkGrantUser1Idx: index("fk_Grant_User1_idx").on(table.userId),
      fkGrantAnswer1: foreignKey({
        columns: [table.answerId, table.answerQuestionId],
        foreignColumns: [answer.id, answer.questionId],
        name: "fk_Grant_Answer1",
      }),
      grantIdRoleIdUserIdPk: primaryKey({
        columns: [table.id, table.roleId, table.userId],
        name: "Grant_id_Role_id_User_id_pk",
      }),
    };
  },
);

export const poll = mysqlTable(
  "Poll",
  {
    id: int("id").notNull(),
    title: mediumtext("title").notNull(),
    description: longtext("description").notNull(),
  },
  (table) => {
    return {
      pollIdPk: primaryKey({ columns: [table.id], name: "Poll_id_pk" }),
    };
  },
);

export const qualification = mysqlTable(
  "Qualification",
  {
    id: int("id").autoincrement().notNull(),
    level: int("level").notNull(),
    userId: int("User_id")
      .notNull()
      .references(() => user.id),
    specialtyId: int("Specialty_id")
      .notNull()
      .references(() => specialty.id),
  },
  (table) => {
    return {
      fkQualificationSpecialty1Idx: index("fk_Qualification_Specialty1_idx").on(
        table.specialtyId,
      ),
      fkQualificationUser1Idx: index("fk_Qualification_User1_idx").on(
        table.userId,
      ),
      qualificationIdUserIdSpecialtyIdPk: primaryKey({
        columns: [table.id, table.userId, table.specialtyId],
        name: "Qualification_id_User_id_Specialty_id_pk",
      }),
    };
  },
);

export const question = mysqlTable(
  "Question",
  {
    id: int("id").autoincrement().notNull(),
    type: mediumtext("type").notNull(),
    text: longtext("text").notNull(),
    pollId: int("Poll_id")
      .notNull()
      .references(() => poll.id),
  },
  (table) => {
    return {
      fkQuestionPoll1Idx: index("fk_Question_Poll1_idx").on(table.pollId),
      questionIdPollIdPk: primaryKey({
        columns: [table.id, table.pollId],
        name: "Question_id_Poll_id_pk",
      }),
    };
  },
);

export const role = mysqlTable(
  "Role",
  {
    id: int("id").autoincrement().notNull(),
    name: tinytext("name").notNull(),
  },
  (table) => {
    return {
      roleIdPk: primaryKey({ columns: [table.id], name: "Role_id_pk" }),
    };
  },
);

export const specialty = mysqlTable(
  "Specialty",
  {
    id: int("id").autoincrement().notNull(),
    name: mediumtext("name").notNull(),
  },
  (table) => {
    return {
      specialtyIdPk: primaryKey({
        columns: [table.id],
        name: "Specialty_id_pk",
      }),
    };
  },
);

export const state = mysqlTable(
  "State",
  {
    id: int("id").autoincrement().notNull(),
    text: longtext("text").notNull(),
    type: mediumtext("type").notNull(),
  },
  (table) => {
    return {
      stateIdPk: primaryKey({ columns: [table.id], name: "State_id_pk" }),
    };
  },
);

export const user = mysqlTable(
  "User",
  {
    id: int("id").autoincrement().notNull(),
    mail: mediumtext("mail").notNull(),
    password: mediumtext("password").notNull(),
    name: mediumtext("name").notNull(),
    age: int("age"),
    gender: mediumtext("gender"),
  },
  (table) => {
    return {
      userIdPk: primaryKey({ columns: [table.id], name: "User_id_pk" }),
    };
  },
);
```

## express-сервер
```ts
import express from "express";
import "dotenv/config";
import * as console from "console";
import router from "./routes";
const app = express();
const PORT = 3000;

app.use("/static", express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
```

## User Router
```ts
import { Router } from "express";
import userController from "../controllers/user.controller";
import handleZodResponse from "../middleware/handleZodResponse";

const router = Router();
router.post("/create", handleZodResponse(userController.create));
router.patch("/:userId", handleZodResponse(userController.update));

router.get("/", userController.getAll);
router.get("/:userId", handleZodResponse(userController.get));

router.delete("/:userId", handleZodResponse(userController.delete));

export default router;
```


## User Controller
```ts
import { Request, Response } from "express";
import UserService from "../services/user.service";
import { zodParseRequest } from "../middleware/handleZodResponse";

import {
    updateUserSchema,
    createUserSchema,
    withUserIdSchema,
} from "../zodSchemas/user.schema";
import * as console from "console";

class UserController {
    async create(req: Request, res: Response) {
        await zodParseRequest(createUserSchema, req);
        const userId = await UserService.create(req.body);
        return { userId };
    }
    async update(req: Request, res: Response) {
        await zodParseRequest(updateUserSchema, req);
        return await UserService.update(req.body, req.params.userId);
    }

    async delete(req: Request, res: Response) {
        await zodParseRequest(withUserIdSchema, req);
        return await UserService.delete(req.params.userId);
    }
    async get(req: Request, res: Response) {
        await zodParseRequest(withUserIdSchema, req);
        return await UserService.get(req.params.userId);
    }

    async getAll(req: Request, res: Response) {
        const users = await UserService.getAll();
        res.status(200).json(users);
    }
}

export default new UserController();
```


## User service
```ts
import db from "../db";
import { z } from "zod";
import { updateUserSchema, createUserSchema } from "../zodSchemas/user.schema";
import { user } from "../db/schema";
import { eq, getTableColumns, sql } from "drizzle-orm";
import * as console from "console";

const { password, ...nonPasswordColumns } = getTableColumns(user);

class UserService {
  async create(body: z.infer<typeof createUserSchema>["body"]) {
    const { roleId } = body;
    const [data] = await db.insert(user).values(body);
    return data.insertId;
  }
  async update(
    body: z.infer<(typeof updateUserSchema)["body"]>,
    userId: string,
  ) {
    await db
      .update(user)
      .set({
        age: body.age,
        gender: body.gender,
        name: body.name,
        mail: body.mail,
      })
      .where(eq(user.id, userId));

    return await this.get(userId);
  }

  async delete(userId: string) {
    await db.delete(user).where(eq(user.id, userId));

    return { message: "Deleted successfully" };
  }

  async get(userId: string) {
    return db.select(nonPasswordColumns).from(user).where({ id: userId });
  }

  async getAll() {
    return db.select(nonPasswordColumns).from(user);
  }
}

export default new UserService();
```

## zod schemas (для валідації запитів)
```ts
import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    password: z.string(),
    name: z.string(),
    mail: z.string().email(),
    age: z.number().optional(),
    gender: z.string().optional(),
    roleId: z.number(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    mail: z.string().email().optional(),
    age: z.number().optional(),
    gender: z.enum(["male", "female"]).optional(),
    role: z.enum(["client", "expert"]).optional(),
  }),
  params: z.object({
    userId: z.string(),
  }),
});

export const withUserIdSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
});
```


## Middleware для обробки помилок
```ts
import { Request, Response } from "express";
import { BaseError } from "../errors";
import { ZodError, z } from "zod";

const handleZodResponse =
  (fn: (req: Request, res: Response) => Return) =>
  async (req: Request, res: Response) => {
    try {
      const result = await fn(req, res);

      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }

      return res.json(result);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          status: 400,
          message: "Request input validation error",
          issues: err.issues,
        });
        return;
      }

      const error = err as Error | BaseError;
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  };

export async function zodParseRequest<T extends AnyZodObject>(
  schema: T,
  req: Request,
): Promise<z.infer<T>> {
  return await schema.parseAsync(req);
}

export default handleZodResponse;
```
