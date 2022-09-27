const timeConverter = (h,m,s) => {
    return h * 3600000 +  m * 60000 + s * 1000;
}
console.log(timeConverter(1,20,30));