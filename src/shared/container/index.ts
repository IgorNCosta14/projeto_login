import { container } from "tsyringe";
import { UsersRepository } from "../../users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);