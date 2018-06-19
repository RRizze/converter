import {
  fromCelsius,
  fromFahrenheit,
  fromKelvin, k, Kelvin
} from './temperature';

// from celsius
describe('convert from celsius', () => {
  test('convert from celsius to kelvin', () => {
    expect(fromCelsius(1, 'kelvin')).toEqual(1 + Kelvin);
  })

  test('convert from celsius to fahrenheit', () => {
    expect(fromCelsius(1, 'fahrenheit')).toEqual(1 * k + 32)
  })
})

// from fahrenheit
describe('convert from celsius', () => {
  test('convert from fahrenheit to kelvin', () => {
    expect(fromFahrenheit(1, 'kelvin')).toEqual((1 - 32) / k + Kelvin);
  })

  test('convert from fahrenheit to celsius', () => {
    expect(fromFahrenheit(1, 'celsius')).toEqual((1 - 32) / k)
  })
})

// from kelvin
describe('convert from kelvin', () => {
  test('convert from kelvin to fahrenheit', () => {
    expect(fromKelvin(1, 'fahrenheit')).toEqual((1 - Kelvin) * k + 32);
  })

  test('convert from kelvin to celsius', () => {
    expect(fromKelvin(1, 'celsius')).toEqual(1 - Kelvin)
  })
})