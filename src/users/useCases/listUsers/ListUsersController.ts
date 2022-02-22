import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUsersUseCase";

class ListUserController {
    async handle(request: Request, response: Response): Promise<Response>{
        const listUsersUseCase = container.resolve(ListUserUseCase)

        const users = await listUsersUseCase.execute();
        
        return response.status(201).json({users})
    }
}

export { ListUserController }