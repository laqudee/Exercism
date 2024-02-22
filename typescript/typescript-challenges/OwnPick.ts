// example
interface Todo2 {
  title: string
  description: string
  completed: boolean
}

type Todo2Preview = Pick<Todo, 'title' | 'completed'>

const todo: Todo2Preview = {
  title: 'Clean room',
  completed: false,
}

// own implement
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type Todo3Preview = MyPick<Todo, 'title' | 'completed'>

