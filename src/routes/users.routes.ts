import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../users/useCases/createUser/CreateUserController";
import { ListUserController } from "../users/useCases/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);

export { usersRoutes }