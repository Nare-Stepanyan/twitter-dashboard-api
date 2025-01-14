import { Request, Response } from "express";

export const aboutHandler = (request: Request, response: Response) => {
    response.status(200).json({message: 'This is an application that interacts with twitter apis'});
};