type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }

// example

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, 'description' | 'title'>

type OwnTodo = MyOmit<Todo, 'title'>

