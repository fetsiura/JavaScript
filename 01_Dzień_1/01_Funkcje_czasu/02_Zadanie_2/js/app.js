function countHello (num){

    let counter =1;

    const interval = setInterval( function (){
        console.log("Hello",counter);
        counter++;
        if(counter >num){
            clearInterval(interval);
        }
    },1000);
}

countHello(10);