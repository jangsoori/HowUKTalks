import React, { useState } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import AccentDetailsTabTitle from "../AccentDetailsTabTitle";
import "./AccentDetailsWords.scss";
export const AccentDetailsWords = (props) => {
  //Pagination hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(15);

  //Only Render if accent is loaded
  const { accent } = props;
  if (!accent) {
    return null;
  }
  //Calculate indexes of words to show
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = accent.words.slice(indexOfFirstWord, indexOfLastWord);
  //Calculate page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(`active page is ${pageNumber}`);
  };

  //Render words
  const renderWords = () => {
    return currentWords.map((word) => {
      return (
        <tr className="words-table-body-word">
          <td width="20%" data-column="Phrase" className="accent-word">
            {word[0]}
          </td>
          <td data-column="Explanation" className="accent-explanation">
            {word[1]}
          </td>
        </tr>
      );
    });
  };
  return (
    <React.Fragment>
      <AccentDetailsTabTitle title="Some words" />
      <section className="accent-details-content">
        <table className="words-table">
          <thead className="words-table-head">
            <tr>
              <th align="left">Phrase</th>
              <th align="left">Explanation</th>
            </tr>
          </thead>
          <tbody className="words-table-body">{renderWords()}</tbody>
        </table>
        {/* Pagination needed after expanding DB */}
        {/* <Pagination
          activeClass="active-page"
          activePage={currentPage}
          itemsCountPerPage={wordsPerPage}
          totalItemsCount={accent.words.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        /> */}
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccentDetailsWords);
