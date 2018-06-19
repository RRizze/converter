export const k = 9 / 5;
export const Kelvin = 273.15;

// from celsius to...
export function fromCelsius(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'kelvin': res = value + Kelvin; break;
    case 'fahrenheit': res = value * k + 32; break;
    default: res = value; break;
  }
  return res;
}

// from fahrenheit to...
export function fromFahrenheit(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'kelvin': res = (value - 32) / k + Kelvin; break;
    case 'celsius': res = (value - 32) / k; break;
    default: res = value; break;
  }
  return res;
}

// from fahrenheit to...
export function fromKelvin(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'fahrenheit': res = (value - Kelvin) * k + 32; break;
    case 'celsius': res = value - Kelvin; break;
    default: res = value; break;
  }
  return res;
}