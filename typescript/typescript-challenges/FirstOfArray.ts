type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T> = T extends [infer F, ...any] ? F : never

type f = First<arr1>
type f2 = First<arr2>
