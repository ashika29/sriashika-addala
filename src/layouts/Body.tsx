import FontWrapper from "./FontWrapper";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ProviderProps } from "@/types/Providers";

function Body({ children }: ProviderProps) {
  return (
    <FontWrapper>
      <Navbar />
      {children}
      <Footer />
    </FontWrapper>
  );
}

export default Body;
