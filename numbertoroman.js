const convertToRoman = (num) => {
    const alphabets = {
        M: 1000,
        D: 500,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
  //  console.log(alphabets.C);
    let string = '';

    for(const key in alphabets){
        const numberValue = alphabets[key];
       // console.log(numberValue);
        while(numberValue <= num){
            num -= numberValue;
            string += key;
        }
    }
    return string;
}
console.log(convertToRoman(22));
console.log(convertToRoman(49)); 
console.log(convertToRoman(738)); 

//USING ARRAY
/*
Object.entries(alphabets).reverse().forEach(([int,rom]) => {
    int = parseInt(int);
    while(num >= int){
        string += rom;
        num -= int;
    }
})
console.log(strings);

convertToRoman(22);
*/