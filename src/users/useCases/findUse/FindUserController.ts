import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserUseCase } from "./FindUserUseCase";

class FindUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        
        const findUserUseCase = container.resolve(FindUserUseCase)

        const user = findUserUseCase.execute(email)

        return response.status(201).json({user});
    }
}

export { FindUserController }