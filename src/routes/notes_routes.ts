import { Router } from "express";
import * as Notes from "../controllers/notes_controller";
const r = Router();
r.get("/", Notes.list);
r.get("/:id", Notes.get);
r.post("/", Notes.create);
r.put("/:id", Notes.update);
r.delete("/:id", Notes.remove);
export default r;