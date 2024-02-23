
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

type Test2 = TupleToUnion2<[23, '23']>

type TupleToUnion<T extends any[]> = T[number]

type TupleToUnion2<T> = T extends (infer Items)[] ? Items : never

