export const ATM_PA = 101325;
export const ATM_TORR = 760;
export const ATM_PSI = 14.6959;
export const PA_TORR = 7.50062 * Math.pow(10, -3);
export const PA_PSI = 145.04 * Math.pow(10, -6);
export const BAR_TORR = 750.06;
export const BAR_PSI = 14.504;
export const TORR_PSI = 19.337 * Math.pow(10, -3);

// from atmosphere to...
export function fromATM(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'pascal': res = value * ATM_PA; break;
    case 'bar': res = value * ATM_PA / Math.pow(10, 5); break;
    case 'torr': res = value * ATM_TORR; break;
    case 'psi': res = value * ATM_PSI; break;
    default: res = value; break;
  }
  return res;
}

// form pascal to...
export function fromPascal(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'atm': res = value / ATM_PA; break;
    case 'bar': res = value / Math.pow(10, 5); break;
    case 'torr': res = value * PA_TORR; break;
    case 'psi': res = value * PA_PSI; break;
    default: res = value; break;
  }
  return res;
}

// from bar to...
export function fromBar(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'atm': res = value  * Math.pow(10, 5) / ATM_PA; break;
    case 'pascal': res = value * Math.pow(10, 5); break;
    case 'torr': res = value * BAR_TORR; break;
    case 'psi': res = value * BAR_PSI; break;
    default: res = value; break;
  }
  return res;
}

// from torr (mm Hg) to...
export function fromTorr(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'pascal': res = value / PA_TORR; break;
    case 'bar': res = value / BAR_TORR; break;
    case 'atm': res = value / ATM_TORR; break;
    case 'psi': res = value * TORR_PSI; break;
    default: res = value; break;
  }
  return res;
}

// from psi('P'ound-force per 'S'quare 'I'nch) to...
export function fromPsi(value, scaleTo) {
  let res;
  switch(scaleTo) {
    case 'pascal': res = value / PA_PSI; break;
    case 'bar': res = value / BAR_PSI; break;
    case 'torr': res = value / TORR_PSI; break;
    case 'atm': res = value / ATM_PSI; break;
    default: res = value; break;
  }
  return res;
}