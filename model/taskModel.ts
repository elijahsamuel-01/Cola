import { Document, Schema, Types } from "mongoose";

interface iTask{
    companyName: string
    email: string
    password: string
    staff: Array<{}>
};

interface iTaskData extends iTask, Document{};

const taskModdel = new Schema(
    {
       companyName:{
        type: String
       },
       email:{
        type: String
       },
       password:{
        type: String
       },
       staff: [
        {
            type: Types.ObjectId,
            ref: "staff"
        }
       ]
    },
    {timestamps: true}
)