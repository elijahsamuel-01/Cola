import { Document } from "mongoose";

interface iTask{
    companyName: string
    email: string
    password: string
    staff: Array<{}>
    project: Array<{}>
};