/*const pickingStudent = () => {
    const students = ["Mandahaa","Anar","Huluguu","Dee","Ziggy","Tsatsa","Jaagii","Muugii","Zoe",
    "MEG","Jamia"];
    let i = Math.floor(Math.random() * 11);

    //console.log(i);
    console.log(students[i]);

}
pickingStudent();
*/

/*const binToDec = (binNum = []) => {
    let power=0;
    let sum=0;
    let total=0;
    for(let i = binNum.length-1; i >= 0; i--){
       sum = binNum[i] * (2 ** power);
   //    console.log(sum);
       power++;
       total += sum;
       //console.log(sum);
    }
    
    console.log(total);
}
binToDec((11011011).toString());
*/

/*
const nearestdivFive = (num) => {
    console.log(Math.round(num/5)*5);
}
nearestdivFive(11);
nearestdivFive(14);
nearestdivFive(27.5);
*/

const greatestCommonDivisor = (num1,num2) => {
    let num3 = 0;
    if(num1 > num2)
    num3 = num2;
    else
    num3 = num1;
    while(num3 > 0){
        if(num1 % num3 == 0 && num2 % num3 == 0){
            return num3;
        }
        num3--;       
    }
    console.log(num3);
}
greatestCommonDivisor(15,12);