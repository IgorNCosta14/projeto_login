import { User } from "../entities/User";

interface ICreateDTO {
    name:string;
    email: string;
    password:string;
}

interface IUsersRepository {
    create({name, email, password}: ICreateDTO): Promise<void>;
    findByEmail(email:string): Promise<User>;
    list(): Promise<User[]>;
    findById(id:string): Promise<User>;
}

export { IUsersRepository, ICreateDTO }