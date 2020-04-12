import * as React from "react";
import backArrow from "../../assets/images/backarrow.svg";
import nextArrow from "../../assets/images/nextarrow.svg";

export interface IPaginationProps {
  currentPage: number;
  perPage: number;
  pageCount: number;
  nextPageEvent: () => void;
  previousPageEvent: () => void;
}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const { pageCount, perPage } = props;
  const pageNumbers: Array<number> = [];
  
  let pagesCount = Math.ceil(pageCount / perPage);
  for (let index = 1; index < pagesCount; index++) {
    pageNumbers.push(index);
  }

  function renderPageNumbers() {
    return pageNumbers.map(function (pageNumber, index) {
      const { currentPage } = props;
      return (
        <div
          className={
            currentPage === pageNumber
              ? "pagination-list-container-item active"
              : "pagination-list-container-item"
          }
          key={index}
        >
          {pageNumber}
        </div>
      );
    });
  }
  return (
    <div className="pagination-container">
      <div className="pagination-sumary">
        Exibindo {props.perPage} postagens
      </div>
      <div className="pagination-list">
        <img src={backArrow} alt="" onClick={() => props.previousPageEvent()} />
        <div className="pagination-list-container">{renderPageNumbers()}</div>
        <img src={nextArrow} alt="" onClick={() => props.nextPageEvent()} />
      </div>
    </div>
  );
};

export default Pagination;
