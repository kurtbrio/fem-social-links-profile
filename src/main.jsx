import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import Page from "./Page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Page />
    </HashRouter>
  </StrictMode>
);
