import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
// import { getProfile } from "../controllers/auController.js"
import { getProfile } from "../controller/authController.js"

const router = express.Router()

router.get("/profile", authMiddleware, getProfile)

export default router