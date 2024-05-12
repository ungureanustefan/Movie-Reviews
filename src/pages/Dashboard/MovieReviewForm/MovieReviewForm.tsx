import { FormEvent, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";
import { useAddReviewMutation } from "../../../store/slices/movies/moviesApiSlice";
import { TypeSelectedMovie } from "../../../types/movieTypes";
import { debounce } from "@mui/material";

function MovieReviewForm({
  selectedMovie,
}: {
  selectedMovie: TypeSelectedMovie;
}) {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [addReview] = useAddReviewMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (review.length > 100) return;
    addReview(review);
    setReview("");
  };

  const debouncedSetValue = debounce((value: string) => {
    setReview(value);
  }, 300);

  useEffect(() => {
    if (review.length > 100) {
      setError("Review message cannot be over 100 characters");
    } else if (review.length <= 0 && error !== "") {
      setError("");
    }
  }, [review]);

  return (
    <div>
      {selectedMovie.title ? (
        <Text>
          You have selected{" "}
          <Text as="span" style={{ fontWeight: "bold" }}>
            {selectedMovie.title}
          </Text>
        </Text>
      ) : (
        <Text>No Movie Title</Text>
      )}
      <Text>Please leave a review below</Text>
      <form onSubmit={handleSubmit}>
        <Input
          setValue={debouncedSetValue}
          label="Review:"
          error={error}
          multiline
          rows={5}
        />
        <Button variant="contained" size="small">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default MovieReviewForm;
