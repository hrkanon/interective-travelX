const marsPerTicket = 5000;
const moonPerTicket = 3000;

function handleButton(planet, operator){
    const planetText = document.getElementById(`${planet}-count`).value;
    const planetNumber = parseFloat(planetText);
    if(operator == "plus"){
        const planetCount = planetNumber + 1;
        document.getElementById(`${planet}-count`).value = planetCount;
    }
    else{
        if(planetNumber > 0){
        const planetCount = planetNumber - 1;
        document.getElementById(`${planet}-count`).value = planetCount;
        }
        else{
            return;
        }       
    }
    getPlanetTotal('mars');
    getPlanetTotal('moon');
    calculateTotal();
}

function getPlanetTotal(planet){
    const planetText = document.getElementById(`${planet}-count`).value;
    const planetNumber = parseFloat(planetText);
    if(planet == 'mars'){
        const marsCost = planetNumber * marsPerTicket;
        document.getElementById(`${planet}-cost`).innerText = marsCost;
        return marsCost
    }
    else if(planet == 'moon'){
        const moonCost = planetNumber * moonPerTicket;
         document.getElementById(`${planet}-cost`).innerText = moonCost;
         return moonCost;
    }
    else{
        return;
    }
}

function calculateTotal(){
    const total = getPlanetTotal('mars') + getPlanetTotal('moon');
    document.getElementById('total-cost').innerText = total;
}