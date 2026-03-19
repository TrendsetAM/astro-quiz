import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Frequencyrewiring2 from "./frequencyrewiring2";
import Frequencyshift from "./frequencyshift";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/frequencyrewiring2" element={<Frequencyrewiring2 />} />
        <Route path="/frequencyshift" element={<Frequencyshift />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
