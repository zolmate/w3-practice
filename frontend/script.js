console.log("This is a script file")

console.log("load")

//console.dir(document)

async function loadevent() {
    let countriesData = await fetch("https://restcountries.com/v3.1/all")
    let countriesJson = await countriesData.json()
    console.log(countriesJson[111])

    let countriesSection = document.getElementById("countries")
    //console.dir(countriesSection)    
    //countriesSection.innerHTML+="hali";    
    countriesSection.insertAdjacentHTML("beforeend",`
    <h1>Countries</h1>
    `)  

    /*let countryComponent = `
    <div class="country">
        <h2>Ide kerül az ország neve</h2>
    </div> 
    `
    */

    function countryComponent(countryName){
     return `
     <div class="country">
        <h2>${countryName}</h2>
    </div> 
    `
    }

    for (let index = 0; index < 30; index++) {
        console.log(index)        
        //countriesSection.insertAdjacentHTML("beforeend", countriesJson[index].name.common)  
        countriesSection.insertAdjacentHTML("beforeend", countryComponent(countriesJson[index].name.common))  
    }

}

window.addEventListener("load",loadevent)

function logger(logThis) {
    console.log(logThis)
    
}

logger("Hello")
logger("Hello2")
logger(4)
logger(true)
