import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LoadingProvider } from "./context/LoadingContext";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <LoadingProvider>
            <SearchProvider>
                <App />
            </SearchProvider>
        </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
