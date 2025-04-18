 import express from "express";
import { sign } from "jsonwebtoken";
import { log, login } from "../controllers/auth.controller";
 const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
   router.get("/logout", logout);

export default router;


