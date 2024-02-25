type arr111 = ['a', 'b', 'c', 'd']
type arr222 = [3, 2, 1]

type Pop<T extends any[]> = T extends [...infer U, any] ? U : never

type r1 = Pop<arr111> // expected to be ['a', 'b', 'c']
type r2 = Pop<arr222> // expected to be [3, 2]
