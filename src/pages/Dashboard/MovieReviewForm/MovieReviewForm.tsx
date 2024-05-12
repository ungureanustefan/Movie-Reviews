import { Box, debounce } from "@mui/material";
import { useState } from "react";
import { useAddReviewMutation } from "../../../store/slices/movies/moviesApiSlice";
import { TypeSelectedMovie } from "../../../types/movieTypes";
import { Button, Input, Text } from "../../../components";

function MovieReviewForm({
  selectedMovie,
  handleClose,
}: {
  selectedMovie: TypeSelectedMovie;
  handleClose: () => void;
}) {
  const [review, setReview] = useState("");
  const [addReview, result] = useAddReviewMutation();

  const isReviewGt100 = review.length > 100;

  const handleSubmit = () => {
    addReview(review);
    setReview("");
    setTimeout(handleClose, 2500);
  };

  const debouncedSetValue = debounce((value: string) => {
    setReview(value);
  }, 300);

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
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <Input
            setValue={debouncedSetValue}
            label="Review"
            error={
              isReviewGt100
                ? "Review message cannot be over 100 characters"
                : ""
            }
            multiline
            rows={5}
          />
          <Button
            variant="contained"
            size="small"
            handleClick={handleSubmit}
            disabled={isReviewGt100}
          >
            Submit
          </Button>
          <Text style={{ color: "green", fontWeight: "bold" }}>
            {result?.data?.message}
          </Text>
        </Box>
      </form>
    </div>
  );
}

export default MovieReviewForm;
