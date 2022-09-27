const gurvaaTavka = (a) => {
    for(let i = 1; i <= a; i++){
        if(i % 3 == 0  && i % 5 == 0)
        console.log("GurvaaTavka");
        else if(i % 3 == 0)
        console.log("Gurvaa");
        else if(i % 5 == 0)
        console.log("Tavka");
        else
        console.log(i);
    }
}
gurvaaTavka(15);