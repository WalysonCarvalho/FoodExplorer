import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MenuItem } from "../Pages/MenuItem";
import { SignIn } from "../Pages/SignIn";
import { MenuMob } from "../Components/MenuMob";
import { Payments } from "../Pages/Payments";

export function HomeRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<MenuItem />} />
      <Route path="/entrar" element={<SignIn />} />
      <Route path="MenuMobile" element={<MenuMob />} />
      <Route path="/pagamento" element={<Payments />} />
    </Routes>
  );
}
