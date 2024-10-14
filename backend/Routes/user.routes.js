import express from 'express'   
import protectRoute from '../middlewares/protectRoute.js'
import { getUserForSidebar } from '../Controllers/user.controller.js'
const router = express.Router()


router.route("/").get(protectRoute,getUserForSidebar)

export default router
