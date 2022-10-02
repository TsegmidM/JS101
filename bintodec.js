const binToDec = (binNum) => {
    let power=0;
    let sum=0;
    for(let i = binNum.length-1; i >= 0; i--){
       sum += binNum[i] * (2 ** power);
       power++;
    }
    console.log(sum);
}
binToDec((11011011).toString());
binToDec((101).toString());

// Below is using js's own functions
/*
const binToDec = (binNum) => {
    let sum=0;
   binNum.forEach((item,idx) => {
        sum+=item * 2 ** idx;
    })
    console.log(sum);
}
binToDec((11011011).toString().split('').reverse());
binToDec((101).toString().split('').reverse());
*/