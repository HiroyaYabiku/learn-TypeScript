export {}

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Suzuki';

  static work() {
    return `私の名前は、${this.firstName}です。`
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());
