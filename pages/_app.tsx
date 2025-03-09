import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className='w-full overflow-x-hidden'>
      <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  );
}
