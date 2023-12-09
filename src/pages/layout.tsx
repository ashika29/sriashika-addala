import React from "react";
import PropTypes from "prop-types";
import { ClassNameMap, makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

interface LayoutProps {
  children: React.ReactChild;
}

function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();

  return <Grid className={classes.body}>{children}</Grid>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles: () => ClassNameMap = makeStyles(() => ({
  body: {
    padding: `5rem 10rem`,
  },
}));

export default Layout;
