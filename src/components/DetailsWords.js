import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    maxHeight: "400px",
  },
});
const DetailsWords = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const { accent } = props;
  const classes = useStyles();

  if (!accent) {
    return null;
  }
  //pagination setup

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  console.log(page);

  const currentWords = accent.words.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  //Only Render if accent is loaded

  return (
    <React.Fragment>
      <TableContainer className={classes.container}>
        <Table
          padding="checkbox"
          className={classes.table}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "20%" }} align="left">
                Phrase
              </TableCell>
              <TableCell align="left">Explanation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentWords.map((word, index) => (
              <TableRow key={index}>
                <TableCell align="left">{word[0]}</TableCell>
                <TableCell align="left">{word[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={accent.words.length}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[]}
        rowsPerPage={rowsPerPage}
      />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsWords);
