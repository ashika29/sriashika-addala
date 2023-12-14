import { ServerStyleSheets } from "@mui/styles";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import { AppType } from "next/app";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v13-pagesRouter"; // or `v14-pagesRouter` if you are using Next.js v14
import { Children } from "react";
import { MyAppProps } from "@/types/Providers";
import createEmotionCache from "@/utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

export default function MyDocument(
  props: DocumentProps & DocumentHeadTagsProps
) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp:
        (
          App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
        ) =>
        (props) =>
          sheets.collect(<App emotionCache={cache} {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
    emotionStyleTags,
  };
};
