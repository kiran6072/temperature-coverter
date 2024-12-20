document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convert-btn').addEventListener('click', function () {
        const temp = parseFloat(document.getElementById('temperature').value);
        const unit = document.getElementById('unit').value;
        const resultDiv = document.getElementById('result');
        if (isNaN(temp)) {
          resultDiv.textContent = 'Please enter a valid temperature.';
          return;
        }
        let convertedTemp;
        if (unit === 'Celsius') {
          convertedTemp = `${(temp * 9/5 + 32).toFixed(2)} °F, ${(temp + 273.15).toFixed(2)} K`;
        } else if (unit === 'Fahrenheit') {
          const celsius = (temp - 32) * 5/9;
          convertedTemp = `${celsius.toFixed(2)} °C, ${(celsius + 273.15).toFixed(2)} K`;
        } else if (unit === 'Kelvin') {
          const celsius = temp - 273.15;
          convertedTemp = `${celsius.toFixed(2)} °C, ${(celsius * 9/5 + 32).toFixed(2)} °F`;
        }
        resultDiv.textContent = convertedTemp;
    });
});
