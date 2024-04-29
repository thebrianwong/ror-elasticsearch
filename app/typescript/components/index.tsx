import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = createRoot(document.getElementById("root") as HTMLElement);
  root.render(<App />);
});
