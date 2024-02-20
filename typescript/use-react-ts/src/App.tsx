import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text }
    ])
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} ></NewTodo>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  )
}

export default App
