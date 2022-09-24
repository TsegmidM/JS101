function fibSequence(num){
   if(num == 0)
   return 0;
   else if( num <= 3)
   return 1;
   return fibSequence(num-1) + fibSequence(num-2);
}
console.log(fibSequence(0));
console.log(fibSequence(5));
console.log(fibSequence(8));
