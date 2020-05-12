export {}

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスと同じ初期化処理で良い場合は、superメソッドを使用
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationnality: ${this.nationality}`;
  }
}


let taro = new Person('Taro', 32, 'Japan');
console.log(taro.name);
console.log(taro.nationality);
