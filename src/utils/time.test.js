import {
  fromWeek,
  fromDay,
  fromHour,
  fromMinute,
  fromSecond,
  fromMillisecond,
  fromMicrosecond,
  fromNanosecond,
  HOUR_WEEK, HOUR_DAY
} from './time';

// from week
describe('convert from week', () => {
  test('convert from week to day', () => {
    expect(fromWeek(1, 'day')).toEqual(7);
  })

  test('convert from week to hour', () => {
    expect(fromWeek(1, 'hour')).toEqual(HOUR_WEEK)
  })

  test('convert from week to minute', () => {
    expect(fromWeek(1, 'minute')).toEqual(60 * HOUR_WEEK);
  })

  test('convert from week to second', () => {
    expect(fromWeek(1, 'second'))
      .toEqual(Math.pow(60, 2) * HOUR_WEEK)
  })

  test('convert from week to millisecond', () => {
    expect(fromWeek(1, 'millisecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 3) * HOUR_WEEK)
  })

  test('convert from week to microsecond', () => {
    expect(fromWeek(1, 'microsecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 6) * HOUR_WEEK)
  })

  test('convert from week to nanosecond', () => {
    expect(fromWeek(1, 'nanosecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 9) * HOUR_WEEK)
  })
})

// from day
describe('convert from day', () => {
  test('convert from day to week', () => {
    expect(fromDay(1, 'day')).toEqual(1 / 7);
  })

  test('convert from day to hour', () => {
    expect(fromDay(1, 'hour')).toEqual(HOUR_DAY)
  })

  test('convert from day to minute', () => {
    expect(fromDay(1, 'minute')).toEqual(60 * HOUR_DAY);
  })

  test('convert from day to second', () => {
    expect(fromDay(1, 'second'))
      .toEqual(Math.pow(60, 2) * HOUR_DAY)
  })

  test('convert from day to millisecond', () => {
    expect(fromDay(1, 'millisecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 3) * HOUR_DAY)
  })

  test('convert from day to microsecond', () => {
    expect(fromDay(1, 'microsecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 6) * HOUR_DAY)
  })

  test('convert from day to nanosecond', () => {
    expect(fromDay(1, 'nanosecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 9) * HOUR_DAY)
  })
})

// from hour
describe('convert from hour', () => {
  test('convert from hour to week', () => {
    expect(fromHour(1, 'week')).toEqual(1 / HOUR_WEEK);
  })

  test('convert from hour to day', () => {
    expect(fromHour(1, 'hour')).toEqual(1 / HOUR_DAY)
  })

  test('convert from hour to minute', () => {
    expect(fromHour(1, 'minute')).toEqual(60);
  })

  test('convert from hour to second', () => {
    expect(fromHour(1, 'second')).toEqual(Math.pow(60, 2))
  })

  test('convert from hour to millisecond', () => {
    expect(fromHour(1, 'millisecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 3))
  })

  test('convert from hour to microsecond', () => {
    expect(fromHour(1, 'microsecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 6))
  })

  test('convert from hour to nanosecond', () => {
    expect(fromHour(1, 'nanosecond'))
      .toEqual(Math.pow(60, 2) * Math.pow(10, 9))
  })
})

// from minute
describe('convert from minute', () => {
  test('convert from minute to week', () => {
    expect(fromMinute(1, 'week')).toEqual(1 / HOUR_WEEK * 60);
  })

  test('convert from minute to day', () => {
    expect(fromMinute(1, 'day')).toEqual(1 / HOUR_DAY * 60)
  })

  test('convert from minute to hour', () => {
    expect(fromMinute(1, 'hour')).toEqual(1 / 60);
  })

  test('convert from minute to second', () => {
    expect(fromMinute(1, 'second')).toEqual(60)
  })

  test('convert from minute to millisecond', () => {
    expect(fromMinute(1, 'millisecond'))
      .toEqual(60 * Math.pow(10, 3))
  })

  test('convert from minute to microsecond', () => {
    expect(fromMinute(1, 'microsecond'))
      .toEqual(60 * Math.pow(10, 6))
  })

  test('convert from minute to nanosecond', () => {
    expect(fromMinute(1, 'nanosecond'))
      .toEqual(60 * Math.pow(10, 9))
  })
})

// from second
describe('convert from second', () => {
  test('convert from second to week', () => {
    expect(fromSecond(1, 'week'))
      .toEqual(1 / (HOUR_WEEK * Math.pow(60, 2)));
  })

  test('convert from second to day', () => {
    expect(fromSecond(1, 'day'))
      .toEqual(1 / (HOUR_DAY * Math.pow(60, 2)))
  })

  test('convert from second to hour', () => {
    expect(fromSecond(1, 'hour')).toEqual(1 / Math.pow(60, 2));
  })

  test('convert from second to minute', () => {
    expect(fromSecond(1, 'minute')).toEqual(1 / 60)
  })

  test('convert from second to millisecond', () => {
    expect(fromSecond(1, 'millisecond'))
      .toEqual(Math.pow(10, 3))
  })

  test('convert from second to microsecond', () => {
    expect(fromSecond(1, 'microsecond'))
      .toEqual(Math.pow(10, 3))
  })

  test('convert from second to nanosecond', () => {
    expect(fromSecond(1, 'nanosecond'))
      .toEqual(Math.pow(10, 9))
  })
})

// from millisecond
describe('convert from millisecond', () => {
  test('convert from millisecond to week', () => {
    expect(fromMillisecond(1, 'week'))
      .toEqual(1 / (HOUR_WEEK * Math.pow(60, 2) * Math.pow(10, 3)));
  })

  test('convert from millisecond to day', () => {
    expect(fromMillisecond(1, 'day'))
      .toEqual(1 / (HOUR_DAY * Math.pow(60, 2) * Math.pow(10, 3)))
  })

  test('convert from millisecond to hour', () => {
    expect(fromMillisecond(1, 'hour'))
      .toEqual(1 / (Math.pow(60, 2) * Math.pow(10, 3)));
  })

  test('convert from millisecond to minute', () => {
    expect(fromMillisecond(1, 'minute'))
      .toEqual(1 / (60 * Math.pow(10, 3)))
  })

  test('convert from millisecond to second', () => {
    expect(fromMillisecond(1, 'second'))
      .toEqual(1 / Math.pow(10, 3))
  })

  test('convert from millisecond to microsecond', () => {
    expect(fromMillisecond(1, 'microsecond'))
      .toEqual(Math.pow(10, 3))
  })

  test('convert from millisecond to nanosecond', () => {
    expect(fromMillisecond(1, 'nanosecond'))
      .toEqual(Math.pow(10, 6))
  })
})

// from microsecond
describe('convert from microsecond', () => {
  test('convert from microsecond to week', () => {
    expect(fromMicrosecond(1, 'week'))
      .toEqual(1 / (HOUR_WEEK * Math.pow(60, 2) * Math.pow(10, 6)));
  })

  test('convert from microsecond to day', () => {
    expect(fromMicrosecond(1, 'day'))
      .toEqual(1 / (HOUR_DAY * Math.pow(60, 2) * Math.pow(10, 6)))
  })

  test('convert from microsecond to hour', () => {
    expect(fromMicrosecond(1, 'hour'))
      .toEqual(1 / (Math.pow(60, 2) * Math.pow(10, 6)));
  })

  test('convert from microsecond to minute', () => {
    expect(fromMicrosecond(1, 'minute'))
      .toEqual(1 / (60 * Math.pow(10, 6)))
  })

  test('convert from microsecond to second', () => {
    expect(fromMicrosecond(1, 'second'))
      .toEqual(1 / Math.pow(10, 6))
  })

  test('convert from microsecond to millisecond', () => {
    expect(fromMicrosecond(1, 'millisecond'))
      .toEqual(1 / Math.pow(10, 3))
  })

  test('convert from microsecond to nanosecond', () => {
    expect(fromMicrosecond(1, 'nanosecond'))
      .toEqual(Math.pow(10, 3))
  })
})

// from nanosecond
describe('convert from nanosecond', () => {
  test('convert from nanosecond to week', () => {
    expect(fromNanosecond(1, 'week'))
      .toEqual(1 / (HOUR_WEEK * Math.pow(60, 2) * Math.pow(10, 9)));
  })

  test('convert from nanosecond to day', () => {
    expect(fromNanosecond(1, 'day'))
      .toEqual(1 / (HOUR_DAY * Math.pow(60, 2) * Math.pow(10, 9)))
  })

  test('convert from nanosecond to hour', () => {
    expect(fromNanosecond(1, 'hour'))
      .toEqual(1 / (Math.pow(60, 2) * Math.pow(10, 9)));
  })

  test('convert from nanosecond to minute', () => {
    expect(fromNanosecond(1, 'minute'))
      .toEqual(1 / (60 * Math.pow(10, 9)))
  })

  test('convert from nanosecond to second', () => {
    expect(fromNanosecond(1, 'second'))
      .toEqual(1 / Math.pow(10, 9))
  })

  test('convert from nanosecond to millisecond', () => {
    expect(fromNanosecond(1, 'millisecond'))
      .toEqual(1 / Math.pow(10, 6))
  })

  test('convert from nanosecond to microsecond', () => {
    expect(fromNanosecond(1, 'microsecond'))
      .toEqual(1 / Math.pow(10, 3))
  })
})