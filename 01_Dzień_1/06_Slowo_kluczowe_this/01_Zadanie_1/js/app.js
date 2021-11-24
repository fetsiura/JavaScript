

const car ={
    brand : "Mercedes",
    color : "white",
    numberOfKilometers : 0,

    printCarInfo: function (){
        console.log(this.brand +", "+this.color+ ", "+this.numberOfKilometers)
    },
    drive : function (km){
        this.numberOfKilometers+=km;
    },
    control: [],
    addControlDate : function (date){
        this.control.push(date)
    },
    printAllControls: function (){
        this.control.forEach( ele => {
                        console.log(`Serwisy wykonane w ${ele}`)
        })
    }
}

car.printCarInfo();
car.drive(10)
car.printCarInfo()
car.addControlDate("2021-11-23")
car.printAllControls()