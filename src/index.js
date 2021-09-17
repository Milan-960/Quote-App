import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Store/authcontext";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
