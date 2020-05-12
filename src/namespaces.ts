export {}

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const tokyo = new Japanese.Tokyo.Person('Taro');
console.log(tokyo);

const osaka = new Japanese.Osaka.Person('Hanako');
console.log(osaka);


// const english = new English.Person('Michael', 'Joseph', 'Jackson');
// console.log(english);
