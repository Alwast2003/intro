import React from "react";
import {HelmetProvider, Helmet} from 'react-helmet-async';

const helmetContext = {};

export const Meta = ({title, description, image}) => {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description.split(' ').slice(0, 180).join(' ') + '...'} />
        <meta property="og:image" content={`https://holidayfind.de/urlaubstyp/images/shareImages/${image}.png`} />
      </Helmet>
    </HelmetProvider>
  );
}