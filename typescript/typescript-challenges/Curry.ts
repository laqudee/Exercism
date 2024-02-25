const add = (x: number, y: number) => x + y

const three = add(1, 2)

// See https://stackoverflow.com/a/72244704/388951
type FirstAsTuple<T extends any[]> = T extends [any, ...infer R]
  ? T extends [...infer F, ...R]
  ? F
  : never
  : never

type Curried<F> = F extends (...args: infer Args) => infer Return
  ? Args['length'] extends 0 | 1
  ? F
  : Args extends [any, ...infer Rest]
  ? (...args: FirstAsTuple<Args>) => Curried<(...rest: Rest) => Return>
  : never
  : never

declare function Currying<T extends Function>(fn: T): Curried<T>

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
