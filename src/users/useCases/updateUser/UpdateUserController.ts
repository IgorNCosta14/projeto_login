import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { email, password, name } = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase)

        const user = await updateUserUseCase.execute({email, password, name, id})

        return response.status(201).json({user});
    }
}

export { UpdateUserController }