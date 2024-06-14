import { Router } from "express";
import { addTask, deleteTask, doneTask, getTasks } from "./tasks.controler.js";

const router  = Router()





router.get('/', getTasks)
router.post('/', addTask)
router.delete('/:id', deleteTask)
router.put('/:id', doneTask)



export default router