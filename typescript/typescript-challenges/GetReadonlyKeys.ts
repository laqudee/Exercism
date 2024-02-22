import { Equal } from "@type-challenges/utils"

//example
interface Todo4 {
  readonly title: string
  readonly description: string
  completed: boolean
}

type Keys = GetReadonlyKeys<Todo4>

type Equal2<X, Y> = (<T> () => T extends X ? true : false) extends (<T> () => T extends Y ? true : false) ? true : false

type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal2<Left<T, K>, Right<T, K>> extends true ? K : never]: true
}

type Left<T, K extends keyof T> = { [_ in K]: T[K] }
type Right<T, K extends keyof T> = { readonly [_ in K]: T[K] }
