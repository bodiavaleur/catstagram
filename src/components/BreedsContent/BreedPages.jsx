import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  .pagination__link,
  .pagination__prevlink,
  .pagination__nextlink,
  .pagination__breaklink {
    height: 100%;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e8e8e8;
    border-radius: 100%;
    outline: none;
    font-family: Quicksand, Arial, Helvetica, sans-serif;
    font-size: 1em;
    cursor: pointer;
    margin: 3vh 0;
  }

  .pagination__page,
  .previous,
  .next,
  .break {
    display: inline-flex;
    height: 35px;
    width: 35px;
    margin: 0 2px;
  }
`;

const BreedPages = props => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={22}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={data => props.onPageClick(data.selected + 1)}
        containerClassName="pagination__container"
        pageClassName="pagination__page"
        pageLinkClassName="pagination__link"
        previousLinkClassName="pagination__prevlink"
        nextLinkClassName="pagination__nextlink"
        breakLinkClassName="pagination__breaklink"
      />
    </PaginationWrapper>
  );
};

export default BreedPages;
