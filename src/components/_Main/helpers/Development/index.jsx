import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.scss';

export const Development = () => {
  const media = useMediaQuery('(max-width:800px)');

  return (
    <>
      {!media && (
        <div className="development">
          Entwickelt von holidayfind.de in Kooperation mit der Hochschule Macromedia
        </div>
      )}
    </>
  );
}