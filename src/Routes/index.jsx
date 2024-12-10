import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AdmAuthRoutes } from "./admin.routes";
import { HomeRoutes } from "./home.routes";


export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <AdmAuthRoutes />
      <HomeRoutes />
    </BrowserRouter>
  );
}