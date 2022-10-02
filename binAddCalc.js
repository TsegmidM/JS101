const binToDec = (binNum, binNum2) => {
    let sum = 0;
    binNum.forEach((item, idx) => {
        sum += item * 2 ** idx;
    })
    binNum2.forEach((item, idx) => {
        sum += item * 2 ** idx;
    })
    console.log(sum);
}
binToDec((11011011).toString().split('').reverse(), (101).toString().split('').reverse());
