interface Todo6 {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

const todo6: MyReadonly2<Todo6, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false
}

// todo6.title = "Hello"; // Error: cannot reassign a readonly property
todo6.completed = true; // OK
