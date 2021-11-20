function countHello (num) {
    let counter =1;
    const inter = setInterval( function () {
        console.log("Hello", counter);
        counter++;
        if (counter>num) {
            clearInterval(inter);
        }
    }, 1000);
}

countHello(5);