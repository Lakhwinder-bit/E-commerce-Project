import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import Home from "../pages/home";
import About  from "../pages/about";
import { Product } from "../pages/product";
import { LikePage } from "../pages/likePage";
import { Sale } from "../pages/sale";


function AppRoutes() {
  return (
    <Routes>
         <Route element={<MainLayout />}>
         
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/product" element={<Product />} />
         <Route path="/likePage" element={<LikePage />} />
           <Route path="/sale" element={<Sale />} />

      </Route>
      
    </Routes>
  );
}

export default AppRoutes;
