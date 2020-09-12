export interface SystemOperatingCondition {
  key: string;
  name: string;
}

export const systemOperatingConditions: SystemOperatingCondition[] = [
  {
    key: "C1",
    name: "штатний режим",
  },
  {
    key: "C2",
    name: "позаштатна ситуація",
  },
  {
    key: "C3",
    name: "критична ситуація",
  },
  {
    key: "C4",
    name: "надзвичайна ситуація",
  },
  {
    key: "C5",
    name: "аварійна ситуація",
  },
  {
    key: "C6",
    name: "аварія",
  },
  {
    key: "C7",
    name: "катастрофічна ситуація",
  },
  {
    key: "C8",
    name: "катастрофа",
  },
];
