function primeNum(num){
    let isPrime = true;
    if(num === 1)
    console.log(`${num} is not a prime number`);
    else if(num > 1){
        for(let i = 2; i < num / 2; i++){
        if(num % i == 0){
          isPrime = false;
       //   break;
        }
    }
    if(isPrime == true)
    console.log(`${num} is a prime number`); 
    else
    console.log(`${num} is not a prime number`);
    }
}
//primeNum(1);
//primeNum(2);
//primeNum(3);
//primeNum(55);
primeNum(33);
//primeNum(Math.random());
//console.log(Math.random() 200);
