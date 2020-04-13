import * as React from "react";
import backArrow from "../../assets/images/backarrow.svg";
import nextArrow from "../../assets/images/nextarrow.svg";
import {
  AcceptedActions,
  ACTION_INCREASE_PAGECOUNT,
  ACTION_DECREASE_PAGECOUNT,
  ACTION_GOTO_PAGE,
} from "../Context/reducer";

export interface IPaginationProps {
  currentPage: number;
  perPage: number;
  pageCount: number;
  nextPageEvent: () => void;
  previousPageEvent: () => void;
  gotoPageEvent: () => void;
  dispatch: React.Dispatch<AcceptedActions>;
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
          onClick={() => {
            const currentAction: AcceptedActions = {
              type: ACTION_GOTO_PAGE,
              payload: pageNumber,
            };
            props.dispatch(currentAction);
            props.gotoPageEvent();
          }}
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
        <img
          src={backArrow}
          alt=""
          onClick={() => {
            const currentAction: AcceptedActions = {
              type: ACTION_DECREASE_PAGECOUNT,
              payload: 0,
            };
            props.dispatch(currentAction);
            props.previousPageEvent();
          }}
        />
        <div className="pagination-list-container">{renderPageNumbers()}</div>
        <img
          src={nextArrow}
          alt=""
          onClick={() => {
            const currentAction: AcceptedActions = {
              type: ACTION_INCREASE_PAGECOUNT,
              payload: 0,
            };
            props.dispatch(currentAction);
            props.nextPageEvent();
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
