export interface IDelete {
  id: number;
  handleClick: (id: number) => Promise<void>;
  toggle: (boolean: boolean) => void;
  title: string;
}
