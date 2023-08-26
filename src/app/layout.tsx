import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import ApolloProviders from "@/apollo/components/ApolloProviders";
import ThemeRegistry from "@/components/styles/ThemeRegistry";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main>
          <ApolloProviders>
            <ThemeRegistry options={{ key: "mui", prepend: true }}>
              <Header />
              <div className="sm:px-[20%] px-10 py-10">{props.children}</div>
            </ThemeRegistry>
          </ApolloProviders>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
