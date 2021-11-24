let sum = "";

function addToSum(operator) {
    sum = sum + operator;
    console.log(sum);
    document.getElementById("output").innerText = sum;
}
function evaluateSum() {
    sum = eval(sum);
    document.getElementById("output").innerText = sum;
}

function clearSum() {
    sum = "";
    document.getElementById("output").innerText = sum;
}
