import express, { Application } from 'express';
import cors from 'cors';
import { dbConfig } from './utils/dbConfig';

const app: Application = express();
const port: number = 5544

app.use(express.json())
app.use(cors());

const server = app.listen(port, () =>{
    console.clear()
    dbConfig()
});

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err)
    process.exit(1);
})

process.on("unhandledRejection", (reason) =>{
    console.log("unhandledRejection", reason)
    server.close(() =>{
        process.exit(1);
    })
})