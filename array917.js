const programming = {};
programming.languages = ["javascrips","java"];
programming.difficulty = 9;
programming.value = "Web";
programming.isRewarding = true;

delete programming.isRewarding;
programming.isFun = true;
programming.languages.push("Python");
programming.difficulty = 8;
for(let i=0; i < programming.languages.length; i++){
    console.log(programming.languages[i], programming.difficulty, programming.value, programming.isFun) ;
}