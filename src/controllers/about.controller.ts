import { Request, Response } from "express";

export const getAbout = (_req: Request, res: Response) => {
    res.status(200).json({message: 'This is an application that interacts with twitter apis'});
};