// 1. removes following (0, undefined, null, "", false, NaN) values from an array 

const array = [29,null,'test','value',"", NaN, 75, undefined, false];

const removeValue = arr => arr.filter((item) => item )

console.log(removeValue(array));


//2. removes matching value of parameter from the array

/*
const strings = ['hey','hi','test','testing'];
const removingValue = (value) => {
      const filtered = strings.filter((item) => item !== value)    
      return filtered;
    }
console.log(removingValue("test"));
console.log(strings);
*/
/*
const strings = ['hey','hi','test','testing'];
const removingValue = (item) => {
    const index = strings.findIndex((element) => element === item)
    if(index > 0){
        strings.splice(index,1);
        return strings;
    }
}
console.log(removingValue("test"));
*/
const strings1 = ['hey','hi','test','testing'];
const removeVal = (i) => strings1.filter((item) => {
    if(item !== i)
    return item;
})

console.log(removeVal("test"));
