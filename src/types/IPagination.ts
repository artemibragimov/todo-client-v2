export interface IPagination {
  pageSize: number;
  totalTask: number | undefined;
  currentPage: number;
  handleClick: (currentPage: number) => void;
}
