var currentValue = "O";
var currentValue = "O";
function playerplace(e){
    if (e.target.innerHTML == ""){
        if (currentValue != "X"){
            currentValue= "X";
            checkwin()
            e.target.innerHTML = currentValue;
        }
        else{
            currentValue= "O";
            checkwin()
            e.target.innerHTML = currentValue;
        }
    }

function checkwin(){
        const s11 = document.getElementById("1-1")
        const s12 = document.getElementById("1-2")
        const s13 = document.getElementById("1-3")
        const s21 = document.getElementById("2-1")
        const s22 = document.getElementById("2-2")
        const s23 = document.getElementById("2-3")
        const s31 = document.getElementById("3-1")
        const s32 = document.getElementById("3-2")
        const s33 = document.getElementById("3-3")
        const cellDiv = e.target;
        let row = cellDiv.getAttribute("row");
        let col = cellDiv.getAttribute("col");
    if (row == "1" && col == "1")
        {
            if ((s12.innerHTML == currentValue && s13.innerHTML == currentValue)||
                (s21.innerHTML == currentValue && s31.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s33.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        } else if (row == "1" && col == "2")
        {
            if ((s11.innerHTML == currentValue && s13.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s32.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        } else if (row == "1" && col == "3")
        {
            if ((s11.innerHTML == currentValue && s12.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s31.innerHTML == currentValue)||
                (s23.innerHTML == currentValue && s33.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        }    
    if (row == "2" && col == "1")
        {
            if ((s11.innerHTML == currentValue && s31.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s23.innerHTML == currentValue))
                
                {
                    console.log("! ! Big WIN ! !")
                }
        } else if (row == "2" && col == "2")
        {
            if ((s12.innerHTML == currentValue && s32.innerHTML == currentValue)||
                (s21.innerHTML == currentValue && s23.innerHTML == currentValue)||
                (s11.innerHTML == currentValue && s33.innerHTML == currentValue)||
                (s13.innerHTML == currentValue && s31.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        } else if (row == "2" && col == "3")
        {
            if ((s21.innerHTML == currentValue && s22.innerHTML == currentValue)||
                (s13.innerHTML == currentValue && s33.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        }    
    if (row == "3" && col == "1")
        {
            if ((s12.innerHTML == currentValue && s13.innerHTML == currentValue)||
                (s21.innerHTML == currentValue && s31.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s33.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        } else if (row == "3" && col == "2")
        {
            if ((s11.innerHTML == currentValue && s13.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s32.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        } else if (row == "3" && col == "3")
        {
            if ((s11.innerHTML == currentValue && s12.innerHTML == currentValue)||
                (s22.innerHTML == currentValue && s31.innerHTML == currentValue)||
                (s23.innerHTML == currentValue && s33.innerHTML == currentValue))
                {
                    console.log("! ! Big WIN ! !")
                }
        }    
}
}
