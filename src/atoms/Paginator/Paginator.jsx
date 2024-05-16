import React from 'react';
import PropTypes from 'prop-types';
import './Paginator.styles.scss';

export const Paginator = ({ currentPage, totalPages, onClick }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (page) => {
    onClick(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;

    if (totalPages <= maxVisiblePages) {
      return pages.map((page) => renderPageNumber(page));
    }

    if (currentPage <= maxVisiblePages - 3) {
      
      for (let i = 1; i <= maxVisiblePages - 1; i++) {
        pageNumbers.push(renderPageNumber(i));
      }
      
      pageNumbers.push(renderPageNumber(totalPages));
    } else if (currentPage >= totalPages - (maxVisiblePages - 3)) {
      pageNumbers.push(renderPageNumber(1));
      
      for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
        pageNumbers.push(renderPageNumber(i));
      }
    } else {
      pageNumbers.push(renderPageNumber(1));
      
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pageNumbers.push(renderPageNumber(i));
      }
      
      pageNumbers.push(renderPageNumber(totalPages));
    }

    return pageNumbers;
  };

  const renderPageNumber = (page) => (
    <div
      key={page}
      className={`page ${page === currentPage && 'active'}`}
      onClick={() => handleClick(page)}
    >
      {page}
    </div>
  );

  const goToFirstPage = () => {
    onClick(1);
  };

  const goToLastPage = () => {
    onClick(totalPages);
  };

  const goToNextSet = () => {
    const nextSetPage = Math.min(currentPage + 10, totalPages);
    onClick(nextSetPage);
  };

  const goToPreviousSet = () => {
    const previousSetPage = Math.max(currentPage - 10, 1);
    onClick(previousSetPage);
  };

  return (
    <div className="paginator">
      <div className="control" onClick={goToFirstPage}>
        &lt;&lt;
      </div>
      <div className="control" onClick={goToPreviousSet}>
        &lt;
      </div>
      {renderPageNumbers()}
      <div className="control" onClick={goToNextSet}>
        &gt;
      </div>
      <div className="control" onClick={goToLastPage}>
        &gt;&gt;
      </div>
    </div>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
