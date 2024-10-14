import express from "express";
import { getMessages, sendMessage } from "../Controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.route("/:id").get(protectRoute, getMessages);
router.route("/send/:id").post(protectRoute, sendMessage);

export default router;
