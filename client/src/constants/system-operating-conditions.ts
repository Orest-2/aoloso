export interface SystemOperatingCondition {
  key: string;
  name: string;
  k: number;
}

export const systemOperatingConditions: SystemOperatingCondition[] = [
  {
    key: "C1",
    name: "штатний режим",
    k: 11 / 9,
  },
  {
    key: "C2",
    name: "позаштатна ситуація",
    k: 7 / 9,
  },
  {
    key: "C3",
    name: "критична ситуація",
    k: 2 / 3,
  },
  {
    key: "C4",
    name: "надзвичайна ситуація",
    k: 5 / 9,
  },
  {
    key: "C5",
    name: "аварійна ситуація",
    k: 4 / 9,
  },
  {
    key: "C6",
    name: "аварія",
    k: 1 / 3,
  },
  {
    key: "C7",
    name: "катастрофічна ситуація",
    k: 2 / 9,
  },
  {
    key: "C8",
    name: "катастрофа",
    k: 1 / 9,
  },
];
