import {
  fromMile,
  fromKilometer,
  fromMeter,
  fromSentimeter,
  fromMillimeter,
  fromMicrometer,
  fromNanometer
  } from './length'

// from miles
describe('convert from Miles', () => {
  test('from miles to kilometers', () => {
    expect(fromMile(1, 'kilometer')).toEqual(1.60934);
  });

  test('from miles to meters', () => {
    expect(fromMile(1, 'meter')).toEqual(1609.34);
  });

  test('from miles to sentimeters', () => {
    expect(fromMile(1, 'sentimeter')).toEqual(160934);
  });

  test('from miles to millimeters', () => {
    expect(fromMile(1, 'millimeter')).toEqual(1609340);
  });

  test('from miles to micrometers', () => {
    expect(fromMile(1, 'micrometer')).toEqual(1609340000);
  });

  test('from miles to nanometers', () => {
    expect(fromMile(1, 'nanometer')).toEqual(1609340000000);
  });

});

// from kilometers
describe('convert from Kilometers', () => {
  test('from kilometers to miles', () => {
    expect(fromKilometer(1, 'mile')).toEqual(1/1.60934);
  });

  test('from kilometers to meters', () => {
    expect(fromKilometer(1, 'meter')).toEqual(Math.pow(10, 3));
  });

  test('from kilometers to sentimeters', () => {
    expect(fromKilometer(1, 'sentimeter')).toEqual(Math.pow(10, 5));
  });

  test('from kilometers to millimeters', () => {
    expect(fromKilometer(1, 'millimeter')).toEqual(Math.pow(10, 6));
  });

  test('from kilometers to micrometers', () => {
    expect(fromKilometer(1, 'micrometer')).toEqual(Math.pow(10, 9));
  });

  test('from kilometers to nanometers', () => {
    expect(fromKilometer(1, 'nanometer')).toEqual(Math.pow(10, 12));
  });
});

// from meters
describe('convert from Meters', () => {
  test('from meters to miles', () => {
    expect(fromMeter(1, 'mile')).toEqual((1/1.60934)/Math.pow(10, 3));
  });

  test('from meters to kilometers', () => {
    expect(fromMeter(1, 'kilometer')).toEqual(Math.pow(10, -3));
  });

  test('from meters to sentimeters', () => {
    expect(fromMeter(1, 'sentimeter')).toEqual(100);
  });

  test('from meters to millimeters', () => {
    expect(fromMeter(1, 'millimeter')).toEqual(Math.pow(10, 3));
  });

  test('from meters to micrometers', () => {
    expect(fromMeter(1, 'micrometer')).toEqual(Math.pow(10, 6));
  });

  test('from meters to nanometers', () => {
    expect(fromMeter(1, 'nanometer')).toEqual(Math.pow(10, 9));
  });
});

// from sentimeters
describe('convert from Sentimeters', () => {
  test('from sentimeters to miles', () => {
    expect(fromSentimeter(1, 'mile')).toEqual((1/1.60934)/Math.pow(10, 5));
  });

  test('from sentimeters to kilometers', () => {
    expect(fromSentimeter(1, 'kilometer')).toEqual(1e-5);
  });

  test('from sentimeters to meters', () => {
    expect(fromSentimeter(1, 'meter')).toEqual(0.01);
  });

  test('from sentimeters to millimeters', () => {
    expect(fromSentimeter(1, 'millimeter')).toEqual(10);
  });

  test('from sentimeters to micrometers', () => {
    expect(fromSentimeter(1, 'micrometer')).toEqual(Math.pow(10, 4));
  });

  test('from sentimeters to nanometers', () => {
    expect(fromSentimeter(1, 'nanometer')).toEqual(Math.pow(10, 7));
  });
});

// from millimeters
describe('convert from Millimeters', () => {
  test('from millimeters to miles', () => {
    expect(fromMillimeter(1, 'mile')).toEqual((1/1.60934)/Math.pow(10, 6));
  });

  test('from millimeters to kilometers', () => {
    expect(fromMillimeter(1, 'kilometer')).toEqual(Math.pow(10, -6));
  });

  test('from millimeters to meters', () => {
    expect(fromMillimeter(1, 'meter')).toEqual(Math.pow(10, -3));
  });

  test('from millimeters to sentimeters', () => {
    expect(fromMillimeter(1, 'sentimeter')).toEqual(0.1);
  });

  test('from millimeters to micrometers', () => {
    expect(fromMillimeter(1, 'micrometer')).toEqual(Math.pow(10, 3));
  });

  test('from millimeters to nanometers', () => {
    expect(fromMillimeter(1, 'nanometer')).toEqual(Math.pow(10, 6));
  });
});

// from micrometers
describe('convert from Micrometers', () => {
  test('from micrometers to miles', () => {
    expect(fromMicrometer(1, 'mile')).toEqual((1/1.60934)/Math.pow(10, 9));
  });

  test('from micrometers to kilometers', () => {
    expect(fromMicrometer(1, 'kilometer')).toEqual(Math.pow(10, -9));
  });

  test('from micrometers to meters', () => {
    expect(fromMicrometer(1, 'meter')).toEqual(Math.pow(10, -6));
  });

  test('from micrometers to sentimeters', () => {
    expect(fromMicrometer(1, 'sentimeter')).toEqual(Math.pow(10, -4));
  });

  test('from micrometers to millimeters', () => {
    expect(fromMicrometer(1, 'millimeter')).toEqual(Math.pow(10, -3));
  });

  test('from micrometers to nanometer', () => {
    expect(fromMicrometer(1, 'nanometer')).toEqual(Math.pow(10, 3));
  });
});

// from nanometers
describe('convert from Nanometers', () => {
  test('from nanometers to miles', () => {
    expect(fromNanometer(1, 'mile')).toEqual((1/1.60934)/Math.pow(10, 12));
  });

  test('from nanometers to kilometers', () => {
    expect(fromNanometer(1, 'kilometer')).toEqual(Math.pow(10, -12));
  });

  test('from nanometers to meters', () => {
    expect(fromNanometer(1, 'meter')).toEqual(Math.pow(10, -9));
  });

  test('from nanometers to sentimeters', () => {
    expect(fromNanometer(1, 'sentimeter')).toEqual(Math.pow(10, -7));
  });

  test('from nanometers to millimeters', () => {
    expect(fromNanometer(1, 'millimeter')).toEqual(Math.pow(10, -6));
  });

  test('from nanometers to micrometeres', () => {
    expect(fromNanometer(1, 'micrometer')).toEqual(Math.pow(10, -3));
  });
});