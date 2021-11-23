
const timeMachine = {
    shape : "Kube",
    model : "K200",
    run: function (date, place){
        console.log(`przeniosłeś się za pomocą maszyny ${this.model} 
        o kształcie ${this.shape} do miejsca ${place} jest data ${date}`);
    }
}

timeMachine.run("2021-12-02", "Warszawa");
