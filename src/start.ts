import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createElement } from "react";
import AppRouter from "./router";
import "./styles.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    createElement(StrictMode, null, createElement(AppRouter))
  );
}
