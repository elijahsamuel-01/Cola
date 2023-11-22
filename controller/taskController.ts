import { Request, Response } from "express";


export const createUser = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"error"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
}