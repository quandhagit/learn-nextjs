import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ApolloProviders from "@/apollo/components/ApolloProviders";
import ThemeRegistry from "@/components/styles/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

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
              <div>{props.children}</div>
            </ThemeRegistry>
          </ApolloProviders>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
