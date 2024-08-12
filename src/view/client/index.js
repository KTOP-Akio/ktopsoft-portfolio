import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "../../layout/client";
import {
  HomePage,
  NewsPage,
  CharacterPage,
  TeyVatPage,
  WebGL,
} from "../../page/client";

const ClientVIew = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<TeyVatPage />} />
          {/* <Route path="news" element={<NewsPage />} />
          <Route path="member" element={<CharacterPage />} />
          <Route path="portfolio" element={<TeyVatPage />} />
          <Route path="webGL" element={<WebGL />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ClientVIew;
