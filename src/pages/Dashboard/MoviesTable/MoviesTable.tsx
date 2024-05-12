import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";
import { TypeID } from "../../../types/commonTypes";
import {
  TypeMovieColumn,
  TypeMovieCompanies,
  TypeMovies,
  TypeSelectedMovie,
} from "../../../types/movieTypes";

const columns: TypeMovieColumn[] = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "review", label: "Review", minWidth: 100 },
  {
    id: "filmCompany",
    label: "Film Company",
    minWidth: 170,
  },
];

function createData(
  title: string,
  review: string,
  filmCompany: string,
  id: TypeID
): TypeSelectedMovie {
  return { title, review, filmCompany, id };
}

function calculateAverageReviewScore(reviews: number[]) {
  return reviews
    .reduce((acc, i) => (acc + i) / reviews.length, 0)
    ?.toString()
    .substring(0, 3);
}

function findMovieCompanyName(
  movieCompaniesData: TypeMovieCompanies,
  filmCompanyId: TypeID
) {
  return movieCompaniesData?.find(
    (movieCompany) => movieCompany.id === filmCompanyId
  )?.name;
}

function MoviesTable({
  moviesData,
  movieCompaniesData,
  setSelectedMovie,
  selectedMovie,
}: {
  moviesData: TypeMovies;
  movieCompaniesData: TypeMovieCompanies;
  setSelectedMovie: (movie: TypeSelectedMovie) => void;
  selectedMovie?: TypeSelectedMovie;
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const rows = useMemo(
    () =>
      moviesData.map((movie) =>
        createData(
          movie.title,
          calculateAverageReviewScore(movie.reviews),
          findMovieCompanyName(movieCompaniesData, movie.filmCompanyId) ?? "",
          movie.id
        )
      ),
    [moviesData, movieCompaniesData]
  );

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      onClick={() => {
                        setSelectedMovie(row);
                      }}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      selected={selectedMovie?.id === row?.id}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default MoviesTable;
