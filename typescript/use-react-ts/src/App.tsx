import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'
import CopyComponent from './hook-components/CopyComponent'
import { ClipboardButton } from './hook-components/ClipboardButton'

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

  const [inputText, setInputText] = useState<string>('')
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <div className='App'>
      <CopyComponent></CopyComponent>
      <div style={{ marginTop: '20px', marginLeft: '20px', display: 'flex' }}>
        <input value={inputText} onChange={handleChangeInput} />
        <ClipboardButton text={inputText} />
      </div>
      <NewTodo onAddTodo={todoAddHandler} ></NewTodo>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  )
}

export default App
