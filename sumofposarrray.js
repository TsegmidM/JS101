const sumOfPos = (str) => {
    let sum=0;
    for(let i = 0; i < str.length;i++){
        if(str[i] > 0)
        sum +=str[i];
    }
    return sum;
}
console.log(sumOfPos([1,2,3.1,4,5]));
console.log(sumOfPos([-2,3.2,4,1,-5,-2,83]));