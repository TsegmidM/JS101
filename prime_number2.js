function primeNum(num){
    let isPrime = true;
    if(num === 1 || (num - Math.floor(num)) !== 0)
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
primeNum(1.5);
primeNum(2);
primeNum(3);
primeNum(9);
primeNum(17);
primeNum(Math.floor(Math.random() *100));

