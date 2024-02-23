import { Equal } from "@type-challenges/utils"

type X1 = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type DeepReadonly<T> = keyof T extends never ? T : { readonly [K in keyof T]: DeepReadonly<T[K]> }

type DeepX1 = DeepReadonly<X1>

type R = Equal<DeepX1, Expected>

