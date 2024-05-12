import { Box, Modal } from "@mui/material";
import MovieReviewForm from "../MovieReviewForm/MovieReviewForm";
import { TypeSelectedMovie } from "../../../types/movieTypes";

type Props = {
  handleClose: () => void;
  selectedMovie: TypeSelectedMovie;
};

function MovieReviewModal({ handleClose, selectedMovie }: Props) {
  return (
    <>
      <Modal
        sx={{ display: "flex" }}
        open={!!selectedMovie}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            background: "white",
            margin: "20px",
            padding: "20px",
            height: "fit-content",
            width: "100%",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <MovieReviewForm
            selectedMovie={selectedMovie}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
}

export default MovieReviewModal;
