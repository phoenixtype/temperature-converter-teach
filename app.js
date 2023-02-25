const fahrenheitInput = document.getElementById("fahrenheit-input");
const celsiusInput = document.getElementById("celsius-input");
const fahrenheitToCelsiusBtn = document.getElementById("fahrenheit-to-celsius");
const celsiusToFahrenheitBtn = document.getElementById("celsius-to-fahrenheit");

// Fahrenheit to Celsius conversion
fahrenheitToCelsiusBtn.addEventListener("click", () => {
  const fahrenheit = fahrenheitInput.value;
  const celsius = ((fahrenheit - 32) * 5) / 9;
  celsiusInput.value = celsius.toFixed(2);
});

// Celsius to Fahrenheit conversion
celsiusToFahrenheitBtn.addEventListener("click", () => {
  const celsius = celsiusInput.value;
  const fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);
});
