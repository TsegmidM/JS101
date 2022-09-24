const findNthLargest = (arr = [], b) => {
    const sortedArr = arr.sort((n1,n2) => {
        if(n1 < n2) return 1;
        else return -1;
    })
    console.log(sortedArr[b-1]);
}
findNthLargest([203, 201, 402, 4891, 20, -2],3);