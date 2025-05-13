var currentValue = "O";

function playerplace(e) {
    if(e.target.className == "grid"){
        return
    }
    if ( e.target.innerHTML == ""){
        if (currentValue == "O"){
            currentValue = "X"
            e.target.innerHTML = currentValue;
        }
        
        else
            currentValue = "O"
            e.target.innerHTML = currentValue;
        
    }
}
