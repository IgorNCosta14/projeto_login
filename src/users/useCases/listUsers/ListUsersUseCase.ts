import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUserUseCase{

    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(){
        const users = await this.usersRepository.list();

        return users;
    }
}

export { ListUserUseCase }