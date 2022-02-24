import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    id: string;
    email: string;
    name: string;
    password: string
}

@injectable()
class UpdateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, name, password, id}: IRequest): Promise<User> {
        const user = await this.usersRepository.findById(id)

        const passwordHash = await hash(password, 8)

        user.password = passwordHash
        user.name = name;
        user.email = email;
        user.id = id;

        await this.usersRepository.

        return user;
    }
}

export { UpdateUserUseCase }