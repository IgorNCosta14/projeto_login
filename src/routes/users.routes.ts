import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../users/useCases/createUser/CreateUserController";
import { FindUserController } from "../users/useCases/findUse/FindUserController";
import { ListUserController } from "../users/useCases/listUsers/ListUsersController";
import { UpdateUserController } from "../users/useCases/updateUser/UpdateUserController";


const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();
const updateUserController = new UpdateUserController();
const findUserConstroller = new FindUserController();

usersRoutes.put("/:id", updateUserController.handle)
usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", findUserConstroller.handle)
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);

export { usersRoutes }