const func = (a) => {
    let sum = 0;
    if(a < 0)
    return 0;
    for(let i = 1; i < a; i++){
        if(i % 4 === 0 || i % 5 === 0)
        sum += i;
    }   
    return sum;
}
console.log(func(11));
console.log(func(-1));