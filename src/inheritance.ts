export {}

class Animal {
  constructor(public name: string) {}
  run(): string {
    return `${this.name} can run`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h`;
  }
}

let lion = new Lion('Lion', 80);
console.log(lion.run());

