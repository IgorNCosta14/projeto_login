import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserUseCase{
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({name, email, password}: IRequest){

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error ("User already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({name, email, password: passwordHash})
    }
}

export { CreateUserUseCase }