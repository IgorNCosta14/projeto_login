import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindUserUseCase { 
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(email: string){
        const user = await this.usersRepository.findByEmail(email)

        return user;
    }
}

export { FindUserUseCase }