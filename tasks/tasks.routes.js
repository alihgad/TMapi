import { Router } from "express";
import { addTask, deleteTask, getTasks } from "./tasks.controler.js";

const router  = Router()





router.get('/', getTasks)
router.post('/', addTask)
router.delete('/:id', deleteTask)



export default router