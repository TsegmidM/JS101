const convertToRoman = (num) => {
    const alphabets = {
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
    console.log(alphabets.C);
    let string = '';

    for(const key in alphabets){
        const numberValue = alphabets[key];;
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
console.log(convertToRoman(99)); 
