import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const Database = async () => {
    const db = await SQLite.openDatabaseAsync("convo_connect.db");
    const createTables = async () => {
        const userSql = `CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(100) NOT NULL, user_id INT(6) NOT NULL, socket_id VARCHAR(250), last_seen TIMESTAMP CURRENT_TIMESTAMP)`;
        const userTable = await db.execAsync(userSql);
        if (userTable) {
            console.log("User table creation successful");
        }
    };
    if (db) {
        console.log("Database Active", db);
    }
    useEffect(() => {
        createTables();
    }, []);
};

export default Database;
