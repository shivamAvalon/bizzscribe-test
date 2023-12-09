"use client";

import { Container} from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "@/utils/providers";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Providers>
          <Container
            minW={{ base: "100%", md: "100%" }}
            p={{ base: "10px", md: "20px 200px 100px 200px" }}
          >
            <NavBar />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
