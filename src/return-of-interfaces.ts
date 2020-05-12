export {}

class Mahotsukai { }
class Souryo { }


// class Taro extends Mahotsukai, Souryo { }

interface kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}


class Jiro implements kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('Senshi');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
