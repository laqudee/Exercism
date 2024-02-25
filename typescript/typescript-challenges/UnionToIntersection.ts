type I = UnionToIntersection<'foo' | 'zoo' | true> // expected to be 'foo' & 42 & true

type e = "foo" | 42
type u = "foo" | 42 | "true"
type r = Exclude<u, e>

type UnionToIntersection<U extends any> = (U extends U ? (x: U) => any : never) extends (x: infer R) => any ? R : never

