import type { AppProps } from "next/app";
import "@/styles/index.css";

type NextPageWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    Layout?: React.ComponentType;
  };
};

const LayoutChildren = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function App({ Component, pageProps }: NextPageWithLayout) {
  const Layout = Component.Layout ?? LayoutChildren;

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
