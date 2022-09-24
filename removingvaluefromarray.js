/*const arr = [1,29,null,'test','value',NaN,75,undefined,false];

const removeValue = arr.filter((value) => {
    const newArr = [];
    //console.log(arr);
    if( value === 1 || value === 29){
    arr.shift(value);
  //!arr.includes(false) && arr.shift(value);
    return arr;}
})

console.log(removeValue);

*/
const arr = [29,null,'test','value',NaN,75,undefined,false];
const func = () => {
    const filtered = arr.filter((a => a !== null)) 
    console.log(filtered);
}
func();