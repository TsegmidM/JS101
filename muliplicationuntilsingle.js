let count = 0;
const multiplicationToSingle = (n) => {
    let total = 1;
    if(typeof n !== 'number'){
    console.log("Error: Input must be a number!");
    return;
    }
    for (let i = 0; i < n.toString().length; i++) {
        total *= n.toString()[i];
    }
    count++;
    console.log(`Step ${count}: ${total}`);

    if (total < 10) return total;
    else return multiplicationToSingle(total);
}
multiplicationToSingle(738);