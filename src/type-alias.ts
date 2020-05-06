export {}

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';


type Profile = {
  name: string;
  age: number;
}

const exampl1: Profile = {
  name: 'Tato',
  age: 30
}

const exampl2 = {
  name: 'Tato',
  age: 30
}

type Profile2 = typeof exampl2;
