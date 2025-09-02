import localFont from "next/font/local";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import "./globals.css";

const rubik = localFont({
  src: [
      {
          path: "../../public/fonts/Rubik-Regular.ttf",
          weight: "400",
          style: "normal",
      },
      {
          path: "../../public/fonts/Rubik-Bold.ttf",
          weight: "700",
          style: "normal",
      },
  ],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Marvel Movies",
  description: "Website consumindo API de filmes, especificamente da marvel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={rubik.variable}>
      <body>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
