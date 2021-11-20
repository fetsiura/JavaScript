const car = {
    brand: "Mercedes",
    color: "silver",
    numberOfKilometers: 0,
    control: [],
    printCarInfo: function () {
        console.log(`Marka ${this.brand}, color ${this.color}, 
        przebieg ${this.numberOfKilometers}, Kontrole wykonane ${car.control}`)
    },
    drive: function (km) {
        this.numberOfKilometers += +km;
    },
    addControlDate: function (date) {
        this.control.push(date);
    },
    printAllControl: function () {
        this.control.forEach(ele => {
            console.log(`Serwisy wykonane w ${ele}`)
        })
    }
}

car.printCarInfo();

car.drive("10");
car.drive(20);
car.printCarInfo();

car.addControlDate("2020-01-01");
car.printCarInfo();
car.addControlDate("2019-01-01");
car.printCarInfo();
car.printAllControl();
