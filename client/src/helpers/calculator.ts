export const sum = <T>(data: T[], callback: (el: T, i?: number) => number) =>
  data.reduce((s, e, i) => (s += callback(e, i)), 0);

export const mult = <T>(data: T[], callback: (el: T, i?: number) => number) =>
  data.reduce((s, e, i) => (s *= callback(e, i)), 1);
