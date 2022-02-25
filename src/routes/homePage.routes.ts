import { Router } from "express";
import express from "express";
import path from "path"
import cors from "cors";

const app = express();
const homeRouter = Router();
app.use(cors);
homeRouter.use('/', express.static(path.join(__dirname, 'public')))

export { homeRouter }