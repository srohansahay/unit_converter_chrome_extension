/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const btn = document.getElementById("button")
let lengthEl = document.getElementById("length_value")
let volumeEl = document.getElementById("volume_value")
let massEl = document.getElementById("mass_value")


tristatement_render()


btn.addEventListener("click", function(){
    
    tristatement_render()

})

function tristatement_render() {
   const inputVal = inputEl.value
    
    lengthEl.textContent = statement_render(inputVal,"length")
   volumeEl.textContent = statement_render(inputVal,"volume")
   massEl.textContent = statement_render(inputVal,"mass")
}

function statement_render(inp,type){
    
    let statement = ""
    let paramone = ""
    let paramtwo = ""
    let mulval = ""
    
    if(type === "length"){
        paramone = "metres"
        paramtwo = "feet"
        mulval = 3.281
    } else if (type === "volume"){
        paramone = "litres"
        paramtwo = "gallons"
        mulval = 0.264
    } else if (type == "mass"){
       paramone = "kilos"
        paramtwo = "pounds"
        mulval = 2.204  
    }
    
    statement = `${inp} ${paramone} = ${(inp*(mulval)).toFixed(3)} ${paramtwo} | ${inp} ${paramtwo} = ${(inp/(mulval)).toFixed(3)} ${paramone}`
    
    return statement
}