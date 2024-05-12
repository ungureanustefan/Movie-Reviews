import { useState } from "react";

import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {
  useGetMovieCompaniesQuery,
  useGetMoviesQuery,
} from "../../store/slices/movies/moviesApiSlice";
import { TypeSelectedMovie } from "../../types/movieTypes";
import MovieReviewForm from "./MovieReviewForm/MovieReviewForm";
import MoviesTable from "./MoviesTable/MoviesTable";
import MovieReviewModal from "./MovieReviewModal/MovieReviewModal";
import { deviceMaxWidth } from "../../utils/breakpoints";

function Dashboard() {
  const {
    data: moviesData,
    error: moviesError,
    isFetching: isFetchingMovies,
    refetch: refetchMovies,
  } = useGetMoviesQuery("movies");

  const {
    data: movieCompaniesData,
    error: moviesCompaniesError,
    isFetching: isFetchingMoviesCompanies,
    refetch: refetchMovieCompanies,
  } = useGetMovieCompaniesQuery("movieCompanies");

  const [selectedMovie, setSelectedMovie] = useState<TypeSelectedMovie>();

  const isError = moviesError || moviesCompaniesError;
  const isLoading = isFetchingMovies || isFetchingMoviesCompanies;
  const hasData = !!moviesData && !!movieCompaniesData;
  const isTabletView = useMediaQuery(deviceMaxWidth.tabletL);
  const isLaptopView = useMediaQuery(deviceMaxWidth.laptopL);

  const handleRefetch = () => {
    refetchMovies();
    refetchMovieCompanies();
    setSelectedMovie(undefined);
  };

  const handleClose = () => setSelectedMovie(undefined);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isTabletView ? "100%" : isLaptopView ? "75%" : "50%",
          alignSelf: "center",
        }}
      >
        <Text as="h2">Welcome to Movie database!</Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {movieCompaniesData ? (
            <Text>
              Total movies displayed: {isError ? 0 : moviesData?.length}
            </Text>
          ) : (
            <Text>No movies loaded yet</Text>
          )}
          <Button size="small" variant="contained" handleClick={handleRefetch}>
            Refresh
          </Button>
        </Box>

        {isLoading ? (
          <CircularProgress sx={{ alignSelf: "center" }} />
        ) : isError ? (
          <Text style={{ color: "red", fontWeight: "bold" }}>
            There was an error
          </Text>
        ) : (
          hasData && (
            <MoviesTable
              moviesData={moviesData}
              movieCompaniesData={movieCompaniesData}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          )
        )}
        <br />
        {!!selectedMovie && !isTabletView ? (
          <MovieReviewForm
            selectedMovie={selectedMovie}
            handleClose={handleClose}
          />
        ) : (
          !isTabletView && "No Movie Selected"
        )}
        {!!selectedMovie && isTabletView && (
          <MovieReviewModal
            selectedMovie={selectedMovie}
            handleClose={handleClose}
          />
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
