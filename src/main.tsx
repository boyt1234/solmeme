import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";

// Polyfills for Buffer and process in browser
import { Buffer } from "buffer";
window.Buffer = Buffer;

import process from "process";
window.process = process;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
