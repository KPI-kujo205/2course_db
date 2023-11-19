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
