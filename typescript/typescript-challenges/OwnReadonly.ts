// example
interface Todo5 {
  title: string
  description: string
}

const todo5: Readonly<Todo5> = {
  title: "Hey",
  description: "foobar"
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Example = MyReadonly<Todo5>
