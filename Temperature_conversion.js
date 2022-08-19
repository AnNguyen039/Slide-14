function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelius").innerHTML = (valNum-32) / 1.8;
}