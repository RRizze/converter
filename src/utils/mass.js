export const POUND_KG = 0.45359237;

// from ton to....
export function fromTon(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'kilogram': res = value * Math.pow(10, 3); break;
    case 'gram': res = value * Math.pow(10, 6); break;
    case 'milligram': res = value * Math.pow(10, 9); break;
    case 'pound': res = (value / POUND_KG) * Math.pow(10, 3); break;
    case 'ounce': res = (value * 16 / POUND_KG) * Math.pow(10, 3); break;
    default: res = value; break;
  }
  return res;
}

// from kilogram to....
export function fromKilogram(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'ton': res = value / Math.pow(10, 3); break;
    case 'gram': res = value * Math.pow(10, 3); break;
    case 'milligram': res = value * Math.pow(10, 6); break;
    case 'pound': res = value / POUND_KG; break;
    case 'ounce': res = value * 16 / POUND_KG; break;
    default: res = value; break;
  }
  return res;
}

// from gram to...
export function fromGram(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'ton': res = value / Math.pow(10, 6); break;
    case 'kilogram': res = value / Math.pow(10, 3); break;
    case 'milligram': res = value * Math.pow(10, 3); break;
    case 'pound': res = value / (POUND_KG * Math.pow(10, 3)); break;
    case 'ounce': res = value * 16 / (POUND_KG * Math.pow(10, 3)); break;
    default: res = value; break;
  }
  return res;
}

// from milligram to...
export function fromMilligram(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'ton': res = value / Math.pow(10, 9); break;
    case 'kilogram': res = value / Math.pow(10, 6); break;
    case 'gram': res = value / Math.pow(10, 3); break;
    case 'pound': res = value / (POUND_KG * Math.pow(10, 6)); break;
    case 'ounce': res = value * 16 / (POUND_KG * Math.pow(10, 6)); break;
    default: res = value; break;
  }
  return res;
}

// from pound to...
export function fromPound(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'ton': res = value * POUND_KG / Math.pow(10, 3); break;
    case 'kilogram': res = value * POUND_KG; break;
    case 'gram': res = value * POUND_KG * Math.pow(10, 3); break;
    case 'milligram': res = value * POUND_KG * Math.pow(10, 6); break;
    case 'ounce': res = value * 16; break;
    default: res = value; break;
  }
  return res;
}

// from ounce to...
export function fromOunce(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'ton': res = value * (POUND_KG / 16) / Math.pow(10, 3); break;
    case 'kilogram': res = value * POUND_KG / 16; break;
    case 'gram': res = (value * POUND_KG / 16) * Math.pow(10,3); break;
    case 'milligram': res = (value * POUND_KG / 16) * Math.pow(10,6); break;
    case 'pound': res = value / 16; break;
    default: res = value; break;
  }
  return res;
}