import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import { deleteSingleUser, getSingleUser, getUserForSidebar } from '../Controllers/user.controller.js';

const router = express.Router();

router.route("/")
  .get(protectRoute, getUserForSidebar);

router.route("/:id")
  .get(protectRoute, getSingleUser)

  router.route("/:id").delete(protectRoute, deleteSingleUser);

export default router;
