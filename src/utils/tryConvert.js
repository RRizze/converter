// mass.js
import {
  fromTon, fromKilogram, fromGram,
  fromMilligram, fromPound, fromOunce
} from './mass';

// length.js
import {
  fromMile, fromKilometer, fromMeter,
  fromSentimeter, fromMillimeter, fromMicrometer,
  fromNanometer
} from './length';

// time.js
import {
  fromWeek, fromDay, fromHour,
  fromMinute, fromSecond, fromMillisecond,
  fromMicrosecond, fromNanosecond
} from './time';

// pressure.js
import {
  fromATM, fromBar, fromPascal,
  fromTorr, fromPsi
} from './pressure';

// temperature.js
import {
  fromCelsius, fromFahrenheit, fromKelvin
} from './temperature';

export function convert(value, scaleFrom, scaleTo) {
  let res;
  switch(scaleFrom) {
    // length
    case 'mile': res = fromMile(value, scaleTo); break;
    case 'kilometer': res = fromKilometer(value, scaleTo); break;
    case 'meter': res = fromMeter(value, scaleTo); break;
    case 'sentimeter': res = fromSentimeter(value, scaleTo); break;
    case 'millimeter': res = fromMillimeter(value, scaleTo); break;
    case 'micrometer': res = fromMicrometer(value, scaleTo); break;
    case 'nanometer': res = fromNanometer(value, scaleTo); break;
    // mass
    case 'ton': res = fromTon(value, scaleTo); break;
    case 'kilogram': res = fromKilogram(value, scaleTo); break;
    case 'pound': res = fromPound(value, scaleTo); break;
    case 'ounce': res = fromOunce(value, scaleTo); break;
    case 'gram': res = fromGram(value, scaleTo); break;
    case 'milligram': res = fromMilligram(value, scaleTo); break;
    // time
    case 'week': res = fromWeek(value, scaleTo); break;
    case 'day': res = fromDay(value, scaleTo); break;
    case 'hour': res = fromHour(value, scaleTo); break;
    case 'minute': res = fromMinute(value, scaleTo); break;
    case 'second': res = fromSecond(value, scaleTo); break;
    case 'millisecond': res = fromMillisecond(value, scaleTo); break;
    case 'microsecond': res = fromMicrosecond(value, scaleTo); break;
    case 'nanosecond': res = fromNanosecond(value, scaleTo); break;
    // pressure
    case 'atm': res = fromATM(value, scaleTo); break;
    case 'bar': res = fromBar(value, scaleTo); break;
    case 'pascal': res = fromPascal(value, scaleTo); break;
    case 'torr': res = fromTorr(value, scaleTo); break;
    case 'psi': res = fromPsi(value, scaleTo); break;
    // temperature
    case 'celsius': res = fromCelsius(value, scaleTo); break;
    case 'fahrenheit': res = fromFahrenheit(value, scaleTo); break;
    case 'kelvin': res = fromKelvin(value, scaleTo); break;
    default: break;
  }
  return res;
}

export function tryConvert(value, scaleFrom, scaleTo) {
  console.log(value);
  const input = parseFloat(value);
  let output, rounded;

  if (Number.isNaN(input) && typeof input == 'number') {
    return '';
  }
  output = convert(input, scaleFrom, scaleTo);
  // how should I round my number?
  rounded = (Math.round(output * Math.pow(10, 8) ) / Math.pow(10, 8))
    .toExponential();

  return rounded.toString();
}