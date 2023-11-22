import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();
const port: number = 5544

app.use(express.json())
app.use(cors());

const server = app.listen(port, () =>{
    console.log("Server listening on port")
});