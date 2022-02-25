let number = document.getElementById('number').textContent;
const meterLength = document.getElementById('meterLength');
const meterConvert = document.getElementById('meterConvert');
const feetLength = document.getElementById('feetLength');
const feetConvert = document.getElementById('feetConvert');
const literVolume = document.getElementById('literVolume');
const literConvert = document.getElementById('literConvert');
const gallonVolume = document.getElementById('gallonVolume');
const gallonConvert = document.getElementById('gallonConvert');
const kiloMass = document.getElementById('kiloMass');
const kiloConvert = document.getElementById('kiloConvert');
const poundMass = document.getElementById('poundMass');
const poundConvert = document.getElementById('poundConvert');

const darkMode = document.getElementById('darkMode');
const bottomBox = document.getElementById('bottomBox');
const inputConvert = document.getElementById('inputConvert')


let meterToFeet = number * 3.28084 ;
let feetToMeter = number / 3.2808;
let literTogallon = number * 0.26417205235815;
let gallonToLiter = number * 3.785412;
let kiloToPound = number * 2.20462;
let poundToKilo = number * 0.453592;

function convert(){
    
    meterToFeet = number * 3.28084 ;
    feetToMeter = number / 3.2808;
    literTogallon = number * 0.26417205235815;
    gallonToLiter = number * 3.785412;
    kiloToPound = number * 2.20462;
    poundToKilo = number * 0.453592;
}







//assign number to conversion
meterLength.textContent = number;
feetLength.textContent = number;
literVolume.textContent = number;
gallonVolume.textContent = number;
kiloMass.textContent = number;
poundMass.textContent = number;

convert();


meterConvert.textContent = meterToFeet.toFixed(3);
feetConvert.textContent = feetToMeter.toFixed(3);
literConvert.textContent = literTogallon.toFixed(3);
gallonConvert.textContent = gallonToLiter.toFixed(3);
kiloConvert.textContent = kiloToPound.toFixed(3);
poundConvert.textContent = poundToKilo.toFixed(3);


function toggleMode(){
    if(bottomBox.classList.contains('dark')){
        bottomBox.classList.remove('dark');
        darkMode.textContent = "Switch to Dark Mode";
    }else{
        bottomBox.classList.add('dark');
        darkMode.textContent = "Switch to Light Mode";
    }
}


darkMode.addEventListener('click',toggleMode);

 
function userConvert(){
    number = document.getElementById('inputConvert').value;
    document.getElementById('number').textContent = number;

    meterLength.textContent = number;
    feetLength.textContent = number;
    literVolume.textContent = number;
    gallonVolume.textContent = number;
    kiloMass.textContent = number;
    poundMass.textContent = number;

    convert();

    meterConvert.textContent = meterToFeet.toFixed(3);
    feetConvert.textContent = feetToMeter.toFixed(3);
    literConvert.textContent = literTogallon.toFixed(3);
    gallonConvert.textContent = gallonToLiter.toFixed(3);
    kiloConvert.textContent = kiloToPound.toFixed(3);
    poundConvert.textContent = poundToKilo.toFixed(3);

}

inputConvert.addEventListener("keyup",userConvert);