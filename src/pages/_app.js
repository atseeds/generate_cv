import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
