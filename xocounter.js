const xoCounter = (str) => {
    count1 = 0;
    count2 = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "x" || str[i] === "X")
        count1++;
        else count2++;
    }
    if(count1 === count2)
    return true
    else return false
}
console.log(xoCounter("xoXo"));
console.log(xoCounter("xoXooxoo"));
console.log(xoCounter("oxOxXoXo"));