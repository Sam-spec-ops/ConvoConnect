import { db } from "./database";
import * as SQLite from 'expo-sqlite';

const CreateTable = async()=>{
  db.transaction((tx)=>{
    tx.executeSql('CREATE TABLE IF NOT EXISTS bookmarktable(id INTERGER(11) PRIMARY KEY AUTO INCREMENT, verse VARCHAR(50) NOT NULL)'),()=>{
        console.log('table created')
    },(__,error)=>{
        console.error('Error creating table:',error)
    }
  })
}
export default CreateTable;