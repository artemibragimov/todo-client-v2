import { IPagination } from '../../types/IPagination';
import { PaginationButton, PaginationContainer } from './Pagination.styled';

const Pagination = ({
  pageSize,
  totalTask,
  currentPage,
  handleClick,
}: IPagination) => {
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
