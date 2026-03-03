import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import Home from "../pages/home";
import About from "../pages/about";

import LikePage  from "../pages/Wishlist";
import { Sale } from "../pages/sale";
import ManTshirt from "../pages/mantshirt";
import GirlTshirt from "../pages/girltshirt";
import {ProductDetails} from "../pages/productDetails";
import KidsTshirt from "../pages/kidishirt";
import CheckoutPage from "../pages/checkOut";

function AppRoutes() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<MainLayout />}>
        
        {/* Home */}
        <Route index element={<Home />} />

        {/* Other pages */}
        <Route path="/checkOut" element={<CheckoutPage/>}/>
        <Route path="/about" element={<About />} />
       
        <Route path="/likePage" element={<LikePage  />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>

        {/* Category pages */}
        <Route path="/kids-tshirt" element={<KidsTshirt />} />
        <Route path="/man-tshirt" element={<ManTshirt />} />
        <Route path="/girl-tshirt" element={<GirlTshirt />} />

      </Route>
    </Routes>
  );
}
export default AppRoutes;
