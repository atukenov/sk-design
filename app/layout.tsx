import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "SK",
  description: "SK portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          {/* <Navbar /> */}
          {children}
        </Container>
      </body>
    </html>
  );
}
