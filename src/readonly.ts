export {}

class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  // 省略した書き方
  // class VisaCard {
  //   constructor(readonly owner: string) {}
  // }

}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);
