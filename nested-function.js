function firstFunction(num1){
    function secondFunction(num2){
        function thirdFunction(num3){
            result = num1 * num2 * num3;
}
    return thirdFunction;
}
return secondFunction;
}
firstFunction(5)(8)(3);
console.log(result);