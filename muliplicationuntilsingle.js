let count = 0;
const multiplicationToSingle = (n) => {
    let total = 1;
    for (let i = 0; i < n.toString().length; i++) {
        total *= n.toString()[i];
    }
    count++;
    console.log(`Step ${count}: ${total}`);

    if (total < 10) return total;
    else return multiplicationToSingle(total);

}
multiplicationToSingle(738);