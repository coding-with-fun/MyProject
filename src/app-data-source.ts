import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "testusers",
  entities: ["src/model/*.ts"],
  logging: true,
  synchronize: true,
});
