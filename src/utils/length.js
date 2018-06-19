const MILE_KM = 1.60934;

// from mile to...
export function fromMile(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'kilometer': res = value * MILE_KM; break;
    case 'meter': res = value * MILE_KM * Math.pow(10, 3); break;
    case 'sentimeter': res = value * MILE_KM * Math.pow(10, 5); break;
    case 'millimeter': res = value * MILE_KM * Math.pow(10, 6); break;
    case 'micrometer': res = value * MILE_KM * Math.pow(10, 9); break;
    case 'nanometer': res = value * MILE_KM * Math.pow(10, 12); break;
    default: res = value; break;
  }
  return res;
}

// from kilometer to...
export function fromKilometer(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'mile': res = value / MILE_KM; break;
    case 'meter': res = value * Math.pow(10, 3); break;
    case 'sentimeter': res = value * Math.pow(10, 5); break;
    case 'millimeter': res = value * Math.pow(10, 6); break;
    case 'micrometer': res = value * Math.pow(10, 9); break;
    case 'nanometer': res = value * Math.pow(10, 12); break;
    default: res = value; break;
  }
  return res;
}

// from meter to...
export function fromMeter(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'mile': res = (value / MILE_KM) / Math.pow(10, 3); break;
    case 'kilometer': res = value / Math.pow(10, 3); break;
    case 'sentimeter': res = value * Math.pow(10, 2); break;
    case 'millimeter': res = value * Math.pow(10, 3); break;
    case 'micrometer': res = value * Math.pow(10, 6); break;
    case 'nanometer': res = value * Math.pow(10, 9); break;
    default: res = value; break;
  }
  return res;
}

// from sentimeter to...
export function fromSentimeter(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'mile': res = (value / MILE_KM) / Math.pow(10, 5); break;
    case 'kilometer': res = value / Math.pow(10, 5); break;
    case 'meter': res = value * Math.pow(10, -2); break;
    case 'millimeter': res = value * 10; break;
    case 'micrometer': res = value * Math.pow(10, 4); break;
    case 'nanometer': res = value * Math.pow(10, 7); break;
    default: res = value; break;
  }
  return res;
}

// from millimeter to...
export function fromMillimeter(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'mile': res = (value / MILE_KM) / Math.pow(10, 6); break;
    case 'kilometer': res = value / Math.pow(10, 6); break;
    case 'meter': res = value / Math.pow(10, 3); break;
    case 'sentimeter': res = value / 10; break;
    case 'micrometer': res = value * Math.pow(10, 3); break;
    case 'nanometer': res = value * Math.pow(10, 6); break;
    default: res = value; break;
  }
  return res;
}

// from millimeter to...
export function fromMicrometer(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'mile': res = (value / MILE_KM) / Math.pow(10, 9); break;
    case 'kilometer': res = value / Math.pow(10, 9); break;
    case 'meter': res = value / Math.pow(10, 6); break;
    case 'sentimeter': res = value / Math.pow(10, 4); break;
    case 'millimeter': res = value / Math.pow(10, 3); break;
    case 'nanometer': res = value * Math.pow(10, 3); break;
    default: res = value; break;
  }
  return res;
}

// from nanometer to...
export function fromNanometer(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'mile': res = (value / MILE_KM) / Math.pow(10, 12); break;
    case 'kilometer': res = value / Math.pow(10, 12); break;
    case 'meter': res = value / Math.pow(10, 9); break;
    case 'sentimeter': res = value / Math.pow(10, 7); break;
    case 'millimeter': res = value / Math.pow(10, 6); break;
    case 'micrometer': res = value / Math.pow(10, 3); break;
    default: res = value; break;
  }
  return res;
}