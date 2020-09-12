export interface Option<T> {
  text: string;
  value: T | null;
  disabled?: boolean;
}

export interface Field {
  key: string;
  label: string;
}
