export interface IKnowledgeBaseMatrixRow {
  m1: number;
  m2: number;
  m3: number;
  m4: number;
  [k: string]: number;
}

export interface IKnowledgeBaseMatrix {
  vhs: IKnowledgeBaseMatrixRow;
  hs: IKnowledgeBaseMatrixRow;
  as: IKnowledgeBaseMatrixRow;
  ls: IKnowledgeBaseMatrixRow;
  vls: IKnowledgeBaseMatrixRow;
  [k: string]: IKnowledgeBaseMatrixRow;
}

export interface IKnowledgeBase {
  c1: IKnowledgeBaseMatrix;
  c2: IKnowledgeBaseMatrix;
  c3: IKnowledgeBaseMatrix;
  c4: IKnowledgeBaseMatrix;
  c5: IKnowledgeBaseMatrix;
  c6: IKnowledgeBaseMatrix;
  c7: IKnowledgeBaseMatrix;
  c8: IKnowledgeBaseMatrix;
  [k: string]: IKnowledgeBaseMatrix;
}

export interface ITermSetItem {
  description: string;
  range: [number, number];
}

export interface ITermSet {
  t1: ITermSetItem;
  t2: ITermSetItem;
  t3: ITermSetItem;
  t4: ITermSetItem;
  t5: ITermSetItem;
  [k: string]: ITermSetItem;
}

export interface ISettingsState {
  knowledgeBase: IKnowledgeBase;
  termSet: ITermSet;
}
