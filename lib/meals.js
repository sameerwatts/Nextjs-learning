import sql from "better-sqlite3";

const db = sql("meals.db");

export const Meals = async () => {
  return db.prepare("SELECT * FROM meals").all();
};
