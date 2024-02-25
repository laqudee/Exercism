import { GetRequired } from "./GetRequired"

type I3 = GetOptional2<{ foo: number, bar?: string }> // expected to be { bar?: string }

type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

type RequiredKeys<T> = keyof GetRequired<T>
type GetOptional2<T> = Omit<T, RequiredKeys<T>>
