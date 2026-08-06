import {Router} from "express";
import { handleUserGetMe, handleUserLogin, handleUserLogout, handleUserRegistration, handleUserVerification } from "../controllers/auth.contoller.js";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router()

authRouter.post("/send-otp", handleUserVerification)

authRouter.post("/register", handleUserRegistration)

authRouter.post("/login", handleUserLogin)

authRouter.get("/logout", handleUserLogout)

authRouter.get("/get-me", authUserMiddleware, handleUserGetMe)

export default authRouter

