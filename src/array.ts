export {}

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strongs2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

// 二次元配列
let hairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

// バラバラの型を持つ配列
let hairetsu2: (string | number | boolean)[] = [1, false, 'Japan'];