import React from 'react';
import { PageHeadingTitle } from '../../styles/headingStyles';


const PageHeading = ({title}) => {
  return (
    <PageHeadingTitle >
      <h1>{title}</h1>
    </PageHeadingTitle>
  );
};

export default PageHeading;
