import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "users",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
})
