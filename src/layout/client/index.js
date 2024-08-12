import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import FaqButton from "../../components/FaqButton";
import { useSelector } from "react-redux";

const ClientLayout = () => {
  const footer = useSelector((state) => state.layout.footer);
  const faq = useSelector((state) => state.faq.show);

  return (
    <>
      <Header />
      <Outlet />
      {footer && <Footer />}
      {/* {faq && <FaqButton />} */}
    </>
  );
};

export default ClientLayout;
