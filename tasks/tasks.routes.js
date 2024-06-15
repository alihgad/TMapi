import { Router } from "express";
import { addTask, deleteTask, doneTask, getTasks, updateTask } from "./tasks.controler.js";

const router  = Router()





router.get('/', getTasks)
router.post('/', addTask)
router.delete('/:id', deleteTask)
router.patch('/:id', doneTask)
router.put('/:id', updateTask)



export default router