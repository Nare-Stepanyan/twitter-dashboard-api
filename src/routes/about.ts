import { Router } from "express";
import { aboutHandler } from "../controllers/about.controller";

const router = Router();

router.get("/", aboutHandler);

export default router;
