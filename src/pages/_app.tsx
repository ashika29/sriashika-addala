import "@/styles/globals.css";
import Layout from "./layout";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { MyAppProps } from "@/types/Providers";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();
const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <AppCacheProvider {...props}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </AppCacheProvider>
  );
}
