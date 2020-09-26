export interface SystemOperatingCondition {
  key: string;
  name: string;
  k: number;
  calc: (r: number) => number;
}

const calc = (r: number, k: number) => {
  if (r < 0) return 0;
  if (0 <= r && r <= 100) return Math.pow(r / 100, k);
  return 1;
};

export const systemOperatingConditions: SystemOperatingCondition[] = [
  {
    key: "C1",
    name: "штатний режим",
    k: 11 / 9,
    calc(r: number) {
      return calc(r, this.k);
    },
  },
  {
    key: "C2",
    name: "позаштатна ситуація",
    k: 7 / 9,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
  {
    key: "C3",
    name: "критична ситуація",
    k: 2 / 3,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
  {
    key: "C4",
    name: "надзвичайна ситуація",
    k: 5 / 9,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
  {
    key: "C5",
    name: "аварійна ситуація",
    k: 4 / 9,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
  {
    key: "C6",
    name: "аварія",
    k: 1 / 3,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
  {
    key: "C7",
    name: "катастрофічна ситуація",
    k: 2 / 9,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
  {
    key: "C8",
    name: "катастрофа",
    k: 1 / 9,
    calc(r: number) {
      return 1 - calc(r, this.k);
    },
  },
];
