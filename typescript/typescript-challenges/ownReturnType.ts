
type OwnReturnType<T extends (...args: Array<any>) => any> = T extends (...args: Array<any>) => infer R ? R : never;

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type X<T> = ReturnType<(args: any) => T>

type Y<T> = OwnReturnType<(x: string, y: number) => T>
