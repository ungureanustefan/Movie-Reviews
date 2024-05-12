import { useState } from "react";

import { Box, CircularProgress } from "@mui/material";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {
  useGetMovieCompaniesQuery,
  useGetMoviesQuery,
} from "../../store/slices/movies/moviesApiSlice";
import { TypeSelectedMovie } from "../../types/movieTypes";
import MovieReviewForm from "./MovieReviewForm/MovieReviewForm";
import MoviesTable from "./MoviesTable/MoviesTable";

function Dashboard() {
  const {
    data: moviesData,
    error: moviesError,
    isLoading: isLoadingMovies,
    refetch: refetchMovies,
  } = useGetMoviesQuery("movies");

  const {
    data: movieCompaniesData,
    error: moviesCompaniesError,
    isLoading: isLoadingMoviesCompanies,
    refetch: refetchMovieCompanies,
  } = useGetMovieCompaniesQuery("movieCompanies");

  const [selectedMovie, setSelectedMovie] = useState<TypeSelectedMovie>();

  const isError = moviesError || moviesCompaniesError;
  const isLoading = isLoadingMovies || isLoadingMoviesCompanies;
  const hasData = !!moviesData && !!movieCompaniesData;

  const handleRefetch = () => {
    refetchMovies();
    refetchMovieCompanies();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignSelf: "center",
        }}
      >
        <Text as="h2">Welcome to Movie database!</Text>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {movieCompaniesData ? (
            <Text>Total movies displayed: {moviesData?.length || 0}</Text>
          ) : (
            <Text>No movies loaded yet</Text>
          )}
          <Button size="small" variant="contained" handleClick={handleRefetch}>
            Refresh
          </Button>
        </Box>

        {isError ? (
          <Text>There was an error</Text>
        ) : isLoading ? (
          <CircularProgress />
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
        {!!selectedMovie ? (
          <MovieReviewForm selectedMovie={selectedMovie} />
        ) : (
          "No Movie Selected"
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
