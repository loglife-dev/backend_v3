import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../config/auth";
import { UserRepository } from "../../../modules/user/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("token missin", 401);
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, auth.secret_refresh_token) as IPayload;

        const usersRepository = new UserRepository();

        const user = await usersRepository.findById(user_id)

        if (!user) {
            throw new AppError("User does not exists!", 401)
        }

        next()
    } catch {
        throw new AppError("Invalid token!", 401)
    }
}