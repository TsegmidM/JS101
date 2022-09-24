const binToDec = (binNum = []) => {
    let power=0;
    let sum=0;
    let total=0;
    for(let i = binNum.length-1; i >= 0; i--){
       sum = binNum[i] * (2 ** power);
      // console.log(sum);
       power++;
       total += sum;
    }
    console.log(total);
}
binToDec((11011011).toString());