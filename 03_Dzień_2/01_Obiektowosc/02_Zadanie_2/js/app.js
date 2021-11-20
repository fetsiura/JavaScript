class Duck {
  constructor() {
      this.type = "ordinary duck"
  }
  sound () {
      console.log("Quack quack")
  }
  swim () {
      console.log("I swimming...")
  }
  print(){
      console.log(this.type);
  }
  fly (){
      console.log("Iam flying")
  }
}

const donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();

class WildDuck extends Duck{
    constructor() {
        super();
        this.type= "wild";
    }
}

const daffyDuck = new WildDuck();
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();

class MallardDuck extends Duck{
    constructor() {
        super();
        this.type = "mallard";
    }
}

const daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();

class RubberDuck extends Duck {
    constructor() {
        super();
        this.type = "rubber"
    }
    fly() {
        console.log("Rubber ducks can't fly!")
    }
}
const rubber = new RubberDuck();
rubber.print();
rubber.fly();


