import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
