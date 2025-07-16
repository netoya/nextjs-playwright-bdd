import "@/styles/globals.css";
import type { AppProps } from "next/app";

type MyAppProps = AppProps & {
  Component: {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
  };
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}
