import { Request, Response } from "express";


export const createUser = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"success"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
}


export const readUser = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"success in getting"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }
    
}

export const deleteUser = async(req: Request, res:Response)=>{
    try {
        return res.status(201).json({
            message:"success in deleting"
        })
    } catch (error) {
        return res.status(404).json({
            message:"error"
        })
    }};
