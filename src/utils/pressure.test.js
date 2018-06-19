import {
  fromATM, fromPascal, fromBar,
  fromTorr, fromPsi,
  ATM_PA, ATM_TORR, ATM_PSI,
  PA_TORR, PA_PSI,
  BAR_TORR, BAR_PSI, TORR_PSI
} from './pressure';

// from atm
describe('convert from atm', () => {
  test('convert from atm to pascal', () => {
    expect(fromATM(1, 'pascal')).toEqual(ATM_PA);
  })

  test('convert from atm to bar', () => {
    expect(fromATM(1, 'bar')).toEqual(ATM_PA / Math.pow(10, 5))
  })

  test('convert from atm to torr', () => {
    expect(fromATM(1, 'torr')).toEqual(ATM_TORR)
  })

  test('convert from atm to psi', () => {
    expect(fromATM(1, 'psi')).toEqual(ATM_PSI)
  })
})

// from pascal
describe('convert from pascal', () => {
  test('convert from pascal to pascal', () => {
    expect(fromPascal(1, 'atm')).toEqual(1 / ATM_PA);
  })

  test('convert from pascal to bar', () => {
    expect(fromPascal(1, 'bar')).toEqual(1 / Math.pow(10, 5))
  })

  test('convert from pascal to torr', () => {
    expect(fromPascal(1, 'torr')).toEqual(PA_TORR)
  })

  test('convert from pascal to psi', () => {
    expect(fromPascal(1, 'psi')).toEqual(PA_PSI)
  })
})

// from bar
describe('convert from bar', () => {
  test('convert from bar to atm', () => {
    expect(fromBar(1, 'atm')).toEqual(Math.pow(10, 5) / ATM_PA);
  })

  test('convert from bar to pascal', () => {
    expect(fromBar(1, 'pascal')).toEqual(Math.pow(10, 5))
  })

  test('convert from bar to torr', () => {
    expect(fromBar(1, 'torr')).toEqual(BAR_TORR)
  })

  test('convert from bar to psi', () => {
    expect(fromBar(1, 'psi')).toEqual(BAR_PSI)
  })
})

// from torr
describe('convert from torr', () => {
  test('convert from torr to pascal', () => {
    expect(fromTorr(1, 'pascal')).toEqual(1 / PA_TORR);
  })

  test('convert from torr to bar', () => {
    expect(fromTorr(1, 'bar')).toEqual(1 / BAR_TORR)
  })

  test('convert from torr to atm', () => {
    expect(fromTorr(1, 'atm')).toEqual(1 / ATM_TORR)
  })

  test('convert from torr to psi', () => {
    expect(fromTorr(1, 'psi')).toEqual(TORR_PSI)
  })
})

// from psi
describe('convert from psi', () => {
  test('convert from psi to pascal', () => {
    expect(fromPsi(1, 'pascal')).toEqual(1 / PA_PSI);
  })

  test('convert from psi to bar', () => {
    expect(fromPsi(1, 'bar')).toEqual(1 / BAR_PSI)
  })

  test('convert from psi to torr', () => {
    expect(fromPsi(1, 'torr')).toEqual(1 / TORR_PSI)
  })

  test('convert from psi to atm', () => {
    expect(fromPsi(1, 'atm')).toEqual(1 / ATM_PSI)
  })
})