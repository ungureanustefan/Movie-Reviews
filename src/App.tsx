import { useRef, useState } from "react";
import Button from "./components/Button/Button";
import {
  useGetMovieCompaniesQuery,
  useGetMoviesQuery,
} from "./store/slices/movies/moviesApiSlice";

export const App = () => {
  const {
    data: moviesData,
    error: moviesError,
    isLoading: isLoadingMovies,
  } = useGetMoviesQuery("movies");
  const {
    data: movieCompaniesData,
    error: moviesCompaniesError,
    isLoading: isLoadingMoviesCompanies,
  } = useGetMovieCompaniesQuery("movieCompanies");
  const movieLength = useRef(moviesData?.length);
  const [selectedMovie, setSelectedMovie] = useState(0);

  const refreshButton = (buttonText: any) => {
    if (movieCompaniesData) {
      return <Button>{buttonText}</Button>;
    } else {
      return <p>No movies loaded yet</p>;
    }
  };

  return (
    <div>
      <h2>Welcome to Movie database!</h2>
      {refreshButton("Refresh")}
      <p>Total movies displayed {movieLength.current}</p>
      <span>Title - Review - Film Company</span>
      <br />
      {moviesData?.map((movie: any) => (
        <span
          onClick={() => {
            setSelectedMovie(movie);
          }}
        >
          {movie.title}{" "}
          {movie.reviews
            .reduce((acc: any, i: any) => (acc + i) / movie.reviews.length, 0)
            ?.toString()
            .substring(0, 3)}{" "}
          {
            movieCompaniesData?.find((f: any) => f.id === movie.filmCompanyId)
              ?.name
          }
          <br />
        </span>
      ))}
      <br />
      <div>
        {selectedMovie
          ? (selectedMovie.title as any)
            ? (("You have selected " + selectedMovie.title) as any)
            : "No Movie Title"
          : "No Movie Seelcted"}
        {selectedMovie && <p>Please leave a review below</p>}
        {selectedMovie && (
          <form onSubmit={() => {}}>
            <label>
              Review:
              <input type="text" />
            </label>
          </form>
        )}
      </div>
    </div>
  );
};
