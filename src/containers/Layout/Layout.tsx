import React, { Fragment } from "react";

import Navbar from "../../components/navbar/navbar";

type iProps = {
  children: React.ReactChild;
};

const Layout = (props: iProps) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};

export default Layout;
