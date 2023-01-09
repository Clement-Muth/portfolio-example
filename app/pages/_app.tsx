import "library/assets/css/main.css";
import { FC, ReactNode, useEffect } from "react";
import { Head } from "library/components/common/Head";
import { theme } from "library/components/common/Theme/theming";
import { ThemeProvider } from "emotion-theming";
import { useNProgress } from "library/hooks";
import { NextPages } from "library/interfaces/pages";
import config from "../config/seo_meta.json";
import type { AppProps } from "next/app";
import { Kanit } from "@next/font/google";

const inter = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Noop: FC<{ children: ReactNode }> = (props) => <>{props.children}</>;

const MyApp = ({ Component, pageProps }: AppProps<NextPages>) => {
  const Layout: FC<NextPages> = (Component as any).Layout || Noop;

  useNProgress();

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <div id="main" className={`${inter.className}`}>
      <Head config={config} />
      <ThemeProvider theme={theme}>
        <Layout Component={Component} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
