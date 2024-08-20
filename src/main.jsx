import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  PlayerContext,
  PlayerContextProvider,
} from "./context/playerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlayerContextProvider>
  </StrictMode>
);
