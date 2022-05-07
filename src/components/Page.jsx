import React, { Fragment, useEffect } from 'react';

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | Avon Elastomers`;
    window.scrollTo(0, 0);
  }, []);
  return <Fragment>{props.children}</Fragment>;
};

export default Page;
