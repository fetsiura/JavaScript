const stairs = {
    step: 0,
    up: function (){
        ++this.step;
    },
    down: function (){
        --this.step;
    },
    printStep: function (){
        console.log(this.step);
    }
}

stairs.printStep();

stairs.up();
stairs.up();
stairs.up();

stairs.printStep();

stairs.down();
stairs.printStep();
