import React from "react";
import PropTypes from "prop-types";
import Body from "@/layouts/Body";
import { ProviderProps } from "@/types/Providers";

function Layout({ children }: ProviderProps): JSX.Element {
  return (
    <div className="gradientBorder">
      <Body>{children}</Body>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
