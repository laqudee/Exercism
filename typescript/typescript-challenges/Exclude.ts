type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type R = MyExclude<{ a: { x: 1 } }, { a: { x: 1 }, b: 2 }>

type MyExclude<T, U> = T extends U ? never : T
