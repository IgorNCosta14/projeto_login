import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { homeRouter } from "./homePage.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use(authenticateRoutes)
router.use(homeRouter)
router.use("/users", usersRoutes)


export { router }