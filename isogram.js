const isogram = (str) => {
    let isIsogram = true;
    for(let i = 0 ; i < str.length; i++){
        if(str[i] === str[i+1])
        isIsogram = false;
    }
    if(isIsogram == false)
    console.log("Not an isogram word");
    else
    console.log("Isogram word");
}
isogram("Bootcamp");
isogram("Botocamp");
