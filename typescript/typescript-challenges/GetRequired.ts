type I2 = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }

type OwnRequired<T> = { [P in keyof T]-?: T[P] }
export type GetRequired<T> = {
  [K in keyof T as T[K] extends OwnRequired<T>[K] ? K : never]: T[K]
}

