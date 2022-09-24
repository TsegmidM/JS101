function firstFunction(num1){
    function secondFunction(num2){
        function thirdFunction(num3){
            return num1 * num2 * num3;
}
    return thirdFunction;
}
return secondFunction;
}
console.log(firstFunction(5)(8)(3));