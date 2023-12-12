import PropTypes from "prop-types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function FontWrapper(props: { className?: string; children: React.ReactNode }) {
  const { className, children } = props;

  return <div className={`${className} ${inter.className}`}>{children}</div>;
}

FontWrapper.propTypes = {
  className: PropTypes.string,
};

export default FontWrapper;
