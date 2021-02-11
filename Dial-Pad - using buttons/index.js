//Enter new Number

function getId(number_id) {
    var inputNumber = document.getElementById(number_id).value;
    var outputDisplay = document.getElementById('output').innerHTML;
    var outputNumber = outputDisplay + inputNumber;
    if (outputDisplay.length < 10) {

        document.getElementById('output').innerHTML = outputNumber;

    }
}
//Clear last number

function clearLast() {
    var outDisplay = document.getElementById('output').innerHTML;
    var newNumber = outDisplay.slice(0, -1);

    document.getElementById('output').innerHTML = newNumber;
}
//Background add and remove on button press and release

function buttonPress(bg_id){
    document.getElementById(bg_id).style.backgroundColor = "#d3e0ea";
}
function buttonRelease(bg_id){
    document.getElementById(bg_id).style.removeProperty("background-color");
}