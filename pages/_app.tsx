import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  variable: '--font-popins'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className='w-full overflow-x-hidden'>
      <Header />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
