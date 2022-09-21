let result = 0;

function fibSequence(num){
   if(num <= 0){
    return console.log("Incorrect num");
   }
   else if( num == 1){
   return 0;
   }
   else if (num === 2){
   return 1;
   }
   else{
    result = fibSequence(num-1) + fibSequence(num-2);
    return result;
    }
}
fibSequence(5);
fibSequence(12);
console.log(result);