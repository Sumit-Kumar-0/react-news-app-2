import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}
