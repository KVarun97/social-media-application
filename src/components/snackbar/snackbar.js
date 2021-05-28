import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { SNACKBAR_CLEAR } from "../../store/store.actions";
const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const { snackbarMessage, snackbarOpen, snackbarSeverity } = useSelector(
    (state) => state.postreducer
  );
  function handleClose() {
    dispatch({ type: SNACKBAR_CLEAR, value: false });
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert variant="filled" onClose={handleClose} severity={snackbarSeverity}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
