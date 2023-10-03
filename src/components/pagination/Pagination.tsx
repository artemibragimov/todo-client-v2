import { PaginationButton, PaginationContainer } from "./Pagination.styled";

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
    <PaginationContainer>
      {pageNumbers.length !== 1 &&
        pageNumbers.map((pageNumber) => (
          <PaginationButton
            $isCurrent={currentPage == pageNumber}
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        ))}
    </PaginationContainer>
  );
};

export default Pagination;
