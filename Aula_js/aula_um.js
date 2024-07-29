function converterFahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

function exibirResultado() {
    const fahrenheit = document.getElementById("fahrenheitInput").value;
    const celsius = converterFahrenheitParaCelsius(parseFloat(fahrenheit));
    document.getElementById("celsiusOutput").textContent = celsius.toFixed(2);
}