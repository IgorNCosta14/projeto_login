import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User)
    }

    async findById(id: string): Promise<User> {
            const user = await this.repository.findOne({id})
    
            if (!user) {
                throw new Error("User not found")
            }

            return user;

    }
    
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});

        if (!user) {
            throw new Error("User not found")
        }
        
        return user;
    }
    
    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async create({name, email, password}: ICreateDTO):Promise<void> {
        const user = this.repository.create({name, email, password});

        await this.repository.save(user)
    }
}

export { UsersRepository }