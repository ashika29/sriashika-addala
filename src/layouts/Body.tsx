import FontWrapper from "./FontWrapper";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ProviderProps } from "@/types/Providers";
import { SnackbarProvider } from "notistack";
import Snackbar from "@/components/Snackbar";

function Body({ children }: ProviderProps) {
  return (
    <FontWrapper>
      <SnackbarProvider
        Components={{
          success: Snackbar,
          info: Snackbar,
          default: Snackbar,
          error: Snackbar,
          warning: Snackbar,
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </SnackbarProvider>
    </FontWrapper>
  );
}

export default Body;
