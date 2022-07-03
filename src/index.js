import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./Container/AppClass"; // You can comment out import of AppFunction and use AppClass as an alternative
import App from "./Container/AppFunction";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("app")).render(<App  />);

reportWebVitals(console.log);

