
function generateSymbol() {

    let symbols = ["♦", "♥", "♠", "♣"];
    let randSymbols = Math.floor(Math.random() * symbols.length);
    //return symbols[randSymbols];
    //document.getElementsByClassName("symbol").innerHTML = symbols[randSymbols];
    document.getElementById("symbol").innerHTML = symbols[randSymbols];
    document.getElementById("symbol2").innerHTML = symbols[randSymbols];
}
//document.getElementById("symbol").innerHTML = generateSymbol();
//document.querySelectorAll("symbol").innerHTML = generateSymbol();
//document.getElementsByClassName("symbol").innerHTML = generateSymbol();

function generateNumber() {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randNumbers = Math.floor(Math.random() * numbers.length);
    //return numbers[randNumbers];
    document.getElementById("number").innerHTML = numbers[randNumbers];
}











