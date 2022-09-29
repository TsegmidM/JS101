// 1. removes following (0, undefined, null, "", false, NaN) values from an array 

const array = [29,null,'test','value',"", NaN, 75, undefined, false];
const removeValue = (value) => {
      const filtered = array.filter((item) => item !== 0 && item !== undefined
      && item !== null && item !== "" && item !== false && item !== NaN);
        return filtered;
    }
console.log(removeValue());


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

const strings = ['hey','hi','test','testing'];
const removingValue = (item) => {
    const index = strings.findIndex((element) => element === item)
    if(index > 0){
        strings.splice(index,1);
        return strings;
    }
}
console.log(removingValue("test"));

