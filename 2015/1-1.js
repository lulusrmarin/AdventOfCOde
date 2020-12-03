var floor = 0;
instructions.split("").forEach(function(char, idx){
    if(char == "("){
        floor++;
    } else if(char == ")") {
        floor--;
    }

    if(floor == -1){
        console.log(idx);
    }
})
