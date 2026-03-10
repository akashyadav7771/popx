import express from "express"
import { register, login,  getProfile } from "../controller/authController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/profile", authMiddleware, getProfile)


router.post("/register",register)
router.post("/login",login)

export default router