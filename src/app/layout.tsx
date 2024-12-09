import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import AnnouncementBar from "@/components/Header/AnnouncementBar";
import { ToastContainer } from "react-toastify";
import Appprovider from "@/components/AppProvider";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import React from "react";
import FloatingAppointment from "@/components/Footer/FloatingAppointment";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <React.Fragment>
        <body>
          <Appprovider>
            <AnnouncementBar />
            <Header />
            {children}
            <ToastContainer />
            <FloatingButton />
            <FloatingAppointment />
            <Footer />
          </Appprovider>
        </body>
      </React.Fragment>
    </html>
  );
}
