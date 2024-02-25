type arr11 = ['a', 'b', 'c']
type arr22 = [3, 2, 1]

type LastOfArray<T extends any[]> = T extends [...infer R, infer L] ? L : never


type a = LastOfArray<arr11> // expected to be 'c'
type b = LastOfArray<arr22> // expected to be 1

