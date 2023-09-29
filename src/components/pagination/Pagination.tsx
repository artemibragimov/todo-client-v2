import s from "./Pagination.module.css";

interface PaginationType {
  pageSize: number;
  totalTask: number | undefined;
  currentPage: number;
  handleClick: (currentPage: number) => void;
}

const Pagination = ({
  pageSize,
  totalTask,
  currentPage,
  handleClick,
}: PaginationType) => {
  if (!totalTask) {
    return;
  }

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTask / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.pagination}>
      {pageNumbers.length !== 1 &&
        pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={
              s.btn + " " + `${currentPage == pageNumber && s.btn_current}`
            }
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
