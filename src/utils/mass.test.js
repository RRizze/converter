import {
  fromTon,
  fromKilogram,
  fromGram,
  fromMilligram,
  fromPound,
  fromOunce,
  POUND_KG,
} from './mass';

// from tons
describe('convert from tons', () => {
  test('convert from tons to kilograms', () => {
    expect(fromTon(1, 'kilogram')).toEqual(Math.pow(10, 3));
  })

  test('convert from tons to grams', () => {
    expect(fromTon(1, 'gram')).toEqual(Math.pow(10, 6));
  })

  test('convert from tons to milligrams', () => {
    expect(fromTon(1, 'milligram')).toEqual(Math.pow(10, 9));
  })

  test('convert from tons to pounds', () => {
    expect(fromTon(1, 'pound')).toEqual(1/POUND_KG * Math.pow(10, 3));
  })

  test('convert from tons to ounces', () => {
    expect(fromTon(1, 'ounce')).toEqual(16/POUND_KG * Math.pow(10, 3));
  })
});

//from kilograms
describe('convert from kilograms', () => {
  test('convert from kilograms to tons', () => {
    expect(fromKilogram(1, 'ton')).toEqual(Math.pow(10, -3));
  })

  test('convert from kilograms to grams', () => {
    expect(fromKilogram(1, 'gram')).toEqual(Math.pow(10, 3));
  })

  test('convert from kilograms to milligrams', () => {
    expect(fromKilogram(1, 'milligram')).toEqual(Math.pow(10, 6));
  })

  test('convert from kilograms to pounds', () => {
    expect(fromKilogram(1, 'pound')).toEqual(1/POUND_KG);
  })

  test('convert from kilograms to ounces', () => {
    expect(fromKilogram(1, 'ounce')).toEqual(16/POUND_KG);
  })
});

//from grams
describe('convert from grams', () => {
  test('convert from grams to tons', () => {
    expect(fromGram(1, 'ton')).toEqual(Math.pow(10, -6));
  })

  test('convert from grams to kilograms', () => {
    expect(fromGram(1, 'kilogram')).toEqual(Math.pow(10, -3));
  })

  test('convert from grams to milligrams', () => {
    expect(fromGram(1, 'milligram')).toEqual(Math.pow(10, 3));
  })

  test('convert from grams to pounds', () => {
    expect(fromGram(1, 'pound')).toEqual(1/POUND_KG * Math.pow(10, -3));
  })

  test('convert from grams to ounces', () => {
    expect(fromGram(1, 'ounce')).toEqual(16/POUND_KG * Math.pow(10, -3));
  })
});

//from milligrams
describe('convert from milligrams', () => {
  test('convert from milligrams to tons', () => {
    expect(fromMilligram(1, 'ton')).toEqual(Math.pow(10, -9));
  })

  test('convert from milligrams to kilograms', () => {
    expect(fromMilligram(1, 'kilogram')).toEqual(Math.pow(10, -6));
  })

  test('convert from milligrams to grams', () => {
    expect(fromMilligram(1, 'gram')).toEqual(Math.pow(10, -3));
  })

  test('convert from milligrams to pounds', () => {
    expect(fromMilligram(1, 'pound')).toEqual(1/(POUND_KG * Math.pow(10, 6)));
  })

  test('convert from milligrams to ounces', () => {
    expect(fromMilligram(1, 'ounce')).toEqual(16/(POUND_KG * Math.pow(10, 6)));
  })
});

//from pounds
describe('convert from pounds', () => {
  test('convert from pounds to tons', () => {
    expect(fromPound(1, 'ton')).toEqual(POUND_KG / Math.pow(10, 3));
  })

  test('convert from pounds to kilograms', () => {
    expect(fromPound(1, 'kilogram')).toEqual(POUND_KG);
  })

  test('convert from pounds to grams', () => {
    expect(fromPound(1, 'gram')).toEqual(POUND_KG * Math.pow(10, 3));
  })

  test('convert from pounds to milligrams', () => {
    expect(fromPound(1, 'milligram')).toEqual(POUND_KG * Math.pow(10, 6));
  })

  test('convert from pounds to ounces', () => {
    expect(fromPound(1, 'ounce')).toEqual(16);
  })
});

//from ounces
describe('convert from ounces', () => {
  test('convert from ounces to tons', () => {
    expect(fromOunce(1, 'ton')).toEqual((POUND_KG / 16) / Math.pow(10, 3));
  })

  test('convert from ounces to kilograms', () => {
    expect(fromOunce(1, 'kilogram')).toEqual(POUND_KG / 16);
  })

  test('convert from ounces to grams', () => {
    expect(fromOunce(1, 'gram')).toEqual(POUND_KG / 16 * Math.pow(10, 3));
  })

  test('convert from ounces to milligrams', () => {
    expect(fromOunce(1, 'milligram')).toEqual(POUND_KG / 16 * Math.pow(10, 6));
  })

  test('convert from ounces to pounds', () => {
    expect(fromOunce(1, 'pound')).toEqual(1/16);
  })
});