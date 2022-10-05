function fibSequence(num){
   if(num == 0)
   return false;
   else if( num < 3)
   return num-1;
   return fibSequence(num-1) + fibSequence(num-2);
}
console.log(fibSequence(1));
console.log(fibSequence(3));
console.log(fibSequence(5));
console.log(fibSequence(8));
