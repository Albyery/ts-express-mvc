import { Router } from "express";
import notesRouter from "./notes_routes";
const router = Router();
router.use("/notes", notesRouter);
export default router;