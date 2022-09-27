const reversedStr = (str) => {
    let str2 = [];
    for(let i=str.length-1; i >= 0; i--){
        str2 += str[i];
    }
    console.log(str2);
}
reversedStr("Hello");
reversedStr("Bootcamp");
reversedStr("хадгалагдах");