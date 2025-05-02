import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app.jsx";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
