const timeMachine = {
    shape: "Ball",
    model: "sl500",
    run: function (date, place){
        console.log(`przeniołeś się za pomocą maszyny ${this.model} 
        o kształcie ${this.shape} do miejsca ${place} jest data ${date}`);
    }
};

timeMachine.run("2020-02-05", "Kraków");
