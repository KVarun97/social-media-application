import React from 'react';
import { CircularProgress } from "@material-ui/core";
import './spinner.scss';
const Spinner = ({ message }) => {
  return (
    <div className="spinner-container">
      <section>
        <CircularProgress />
      </section>
      <section>{message}</section>
    </div>
  );
};
export default Spinner;
