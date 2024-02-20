import { Router } from 'express'
import { createTodo, getTodos, updateText, deleteTodo } from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id', updateText)
router.delete('/:id', deleteTodo)

export default router
