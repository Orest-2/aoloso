export interface KnowledgeBaseMatrixRow {
  m1: number;
  m2: number;
  m3: number;
  m4: number;
  [k: string]: number;
}

export interface KnowledgeBaseMatrix {
  vhs: KnowledgeBaseMatrixRow;
  hs: KnowledgeBaseMatrixRow;
  as: KnowledgeBaseMatrixRow;
  ls: KnowledgeBaseMatrixRow;
  vls: KnowledgeBaseMatrixRow;
  [k: string]: KnowledgeBaseMatrixRow;
}

export interface KnowledgeBase {
  c1: KnowledgeBaseMatrix;
  c2: KnowledgeBaseMatrix;
  c3: KnowledgeBaseMatrix;
  c4: KnowledgeBaseMatrix;
  c5: KnowledgeBaseMatrix;
  c6: KnowledgeBaseMatrix;
  c7: KnowledgeBaseMatrix;
  c8: KnowledgeBaseMatrix;
  [k: string]: KnowledgeBaseMatrix;
}

export interface TermSetItem {
  name: string;
  range: [number, number];
}

export interface TermSet {
  t1: TermSetItem;
  t2: TermSetItem;
  t3: TermSetItem;
  t4: TermSetItem;
  t5: TermSetItem;
  [k: string]: TermSetItem;
}

export interface SettingsState {
  knowledgeBase: KnowledgeBase;
  termSet: TermSet;
}
