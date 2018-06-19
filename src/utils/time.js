export const HOUR_WEEK = 168;
export const HOUR_DAY = 24;

// from week to...
export function fromWeek(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'day': res = value * 7; break;
    case 'hour': res = value * HOUR_WEEK; break;
    case 'minute': res = value * 60 * HOUR_WEEK; break;
    case 'second': res = value * Math.pow(60, 2) * HOUR_WEEK; break;
    case 'millisecond': res = value * Math.pow(60, 2) * Math.pow(10, 3) * HOUR_WEEK; break;
    case 'microsecond': res = value * Math.pow(60, 2) * Math.pow(10, 6) * HOUR_WEEK; break;
    case 'nanosecond': res = value * Math.pow(60, 2) * Math.pow(10, 9) * HOUR_WEEK; break;
    default: res = value; break;
  }
  return res;
}

// from day to...
export function fromDay(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / 7; break;
    case 'hour': res = value * HOUR_DAY; break;
    case 'minute': res = value * 60 * HOUR_DAY; break;
    case 'second': res = value * Math.pow(60, 2) * HOUR_DAY; break;
    case 'millisecond': res = value * Math.pow(60, 2) * Math.pow(10, 3) * HOUR_DAY; break;
    case 'microsecond': res = value * Math.pow(60, 2) * Math.pow(10, 6) * HOUR_DAY; break;
    case 'nanosecond': res = value * Math.pow(60, 2) * Math.pow(10, 9) * HOUR_DAY; break;
    default: res = value; break;
  }
  return res;
}

// from hour to...
export function fromHour(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / HOUR_WEEK; break;
    case 'day': res = value / HOUR_DAY; break;
    case 'minute': res = value * 60; break;
    case 'second': res = value * Math.pow(60, 2); break;
    case 'millisecond': res = value * Math.pow(60, 2) * Math.pow(10, 3); break;
    case 'microsecond': res = value * Math.pow(60, 2) * Math.pow(10, 6); break;
    case 'nanosecond': res = value * Math.pow(60, 2) * Math.pow(10, 9); break;
    default: res = value; break;
  }
  return res;
}

// from minute to...
export function fromMinute(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / (HOUR_WEEK * 60); break;
    case 'day': res = value / (HOUR_DAY * 60); break;
    case 'hour': res = value / 60; break;
    case 'second': res = value * 60; break;
    case 'millisecond': res = value * 60 * Math.pow(10, 3); break;
    case 'microsecond': res = value * 60 * Math.pow(10, 6); break;
    case 'nanosecond': res = value * 60 * Math.pow(10, 9); break;
    default: res = value; break;
  }
  return res;
}

// from second to...
export function fromSecond(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / (HOUR_WEEK * Math.pow(60, 2)); break;
    case 'day': res = value / (HOUR_DAY * Math.pow(60, 2)); break;
    case 'hour': res = value / Math.pow(60, 2); break;
    case 'minute': res = value / 60; break;
    case 'millisecond': res = value * Math.pow(10, 3); break;
    case 'microsecond': res = value * Math.pow(10, 6); break;
    case 'nanosecond': res = value * Math.pow(10, 9); break;
    default: res = value; break;
  }
  return res;
}

// from millisecond to...
export function fromMillisecond(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / (HOUR_WEEK * Math.pow(60, 2) * Math.pow(10, 3)); break;
    case 'day': res = value / (HOUR_DAY * Math.pow(60, 2) * Math.pow(10, 3)); break;
    case 'hour': res = value / (Math.pow(60, 2) * Math.pow(10, 3)); break;
    case 'minute': res = value / (60 * Math.pow(10, 3)); break;
    case 'second': res = value / Math.pow(10, 3); break;
    case 'microsecond': res = value * Math.pow(10, 3); break;
    case 'nanosecond': res = value * Math.pow(10, 6); break;
    default: res = value; break;
  }
  return res;
}

// from microsecond to...
export function fromMicrosecond(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / (HOUR_WEEK * Math.pow(60, 2) * Math.pow(10, 6)); break;
    case 'day': res = value / (HOUR_DAY * Math.pow(60, 2) * Math.pow(10, 6)); break;
    case 'hour': res = value / (Math.pow(60, 2) * Math.pow(10, 6)); break;
    case 'minute': res = value / (60 * Math.pow(10, 6)); break;
    case 'second': res = value / Math.pow(10, 6); break;
    case 'millisecond': res = value / Math.pow(10, 3); break;
    case 'nanosecond': res = value * Math.pow(10, 3); break;
    default: res = value; break;
  }
  return res;
}

// from nanosecond to...
export function fromNanosecond(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'week': res = value / (HOUR_WEEK * Math.pow(60, 2) * Math.pow(10, 9)); break;
    case 'day': res = value / (HOUR_DAY * Math.pow(60, 2) * Math.pow(10, 9)); break;
    case 'hour': res = value / (Math.pow(60, 2) * Math.pow(10, 9)); break;
    case 'minute': res = value / (60 * Math.pow(10, 9)); break;
    case 'second': res = value / Math.pow(10, 9); break;
    case 'millisecond': res = value / Math.pow(10, 6); break;
    case 'microsecond': res = value / Math.pow(10, 3); break;
    default: res = value; break;
  }
  return res;
}