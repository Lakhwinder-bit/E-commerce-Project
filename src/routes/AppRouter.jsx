import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import Home from "../pages/home";
import About from "../pages/about";
import { Product } from "../pages/product";
import { LikePage } from "../pages/likePage";
import { Sale } from "../pages/sale";
import ManTshirt from "../pages/mantshirt";
import GirlTshirt from "../pages/girltshirt";
import KidsTshirt from "../pages/kidishirt";

function AppRoutes() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<MainLayout />}>
        
        {/* Home */}
        <Route index element={<Home />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/likePage" element={<LikePage />} />
        <Route path="/sale" element={<Sale />} />

        {/* Category pages */}
        <Route path="/kids-tshirt" element={<KidsTshirt />} />
        <Route path="/man-tshirt" element={<ManTshirt />} />
        <Route path="/girl-tshirt" element={<GirlTshirt />} />

      </Route>
    </Routes>
  );
}
export default AppRoutes;
