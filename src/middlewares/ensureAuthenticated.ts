import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../users/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHearder = request.headers.authorization;

  if (!authHearder) {
    throw new Error("Token missing");
  }

  const [, token] = authHearder.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "06627c1564c473b7ccbb0001479ea78f"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
