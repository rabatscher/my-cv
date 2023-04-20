import "@/styles/globals.css";
import { Montserrat, Source_Sans_Pro } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const source_sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-source",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${montserrat.variable} font-mont ${source_sans_pro.variable} font-source`}
    >
      <Component {...pageProps} />;
    </main>
  );
}
