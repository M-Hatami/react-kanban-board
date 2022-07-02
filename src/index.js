import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./Container/AppClass";
// import App from "./Container/AppFunction";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("app")).render(<App />);

reportWebVitals(console.log);
