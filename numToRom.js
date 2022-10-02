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
    Object.entries(alphabets).forEach(([rom, int]) => {
        int = parseInt(int);
        while (num >= int) {
            string += rom;
            num -= int;
        }
    })
    return string;
}
console.log(convertToRoman(22));
console.log(convertToRoman(49));
console.log(convertToRoman(738));
