import { LSet, TermSet } from "@/store/models/settings";

export const termSet: TermSet = {
  t1: {
    name: "низький рівень",
    range: [0, 2],
  },
  t2: {
    name: "рівень нижче середнього",
    range: [2, 4],
  },
  t3: {
    name: "середній рівень",
    range: [4, 6],
  },
  t4: {
    name: "рівень вище середнього",
    range: [6, 8],
  },
  t5: {
    name: "високий рівень",
    range: [8, 10],
  },
};

export const lSet: LSet = {
  vls: {
    name: "дуже низький рівень функціонування системи",
    range: [0, 0.2],
  },
  ls: {
    name: "низький рівень функціонування системи",
    range: [0.2, 0.4],
  },
  as: {
    name: "середній рівень функціонування системи",
    range: [0.4, 0.6],
  },
  hs: {
    name: "високий рівень функціонування системи",
    range: [0.6, 0.8],
  },
  vhs: {
    name: "дуже високий рівень функціонування системи",
    range: [0.8, 1],
  },
};

export const getKnowledgeBaseDeaultState = (i: number) =>
  [
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      as: { m1: 1, m2: 1, m3: 1, m4: 1 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      as: { m1: 1, m2: 1, m3: 1, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      as: { m1: 1, m2: 1, m3: 0, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      as: { m1: 1, m2: 0, m3: 0, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      as: { m1: 0, m2: 0, m3: 0, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 1, m4: 0 },
      as: { m1: 0, m2: 0, m3: 0, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 1, m3: 0, m4: 0 },
      as: { m1: 0, m2: 0, m3: 0, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
    {
      vhs: { m1: 1, m2: 1, m3: 1, m4: 1 },
      hs: { m1: 1, m2: 0, m3: 0, m4: 0 },
      as: { m1: 0, m2: 0, m3: 0, m4: 0 },
      ls: { m1: 0, m2: 0, m3: 0, m4: 0 },
      vls: { m1: 0, m2: 0, m3: 0, m4: 0 },
    },
  ][i];