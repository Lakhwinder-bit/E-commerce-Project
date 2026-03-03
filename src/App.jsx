import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRouter";
import { WishlistProvider } from "./context/wishListContext";
import { CartProvider } from "./context/cardContext";


function App() {
  return (
   
   <WishlistProvider> 
     <CartProvider>                    {/* ✅ MUST WRAP EVERYTHING */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
        </CartProvider> 
    </WishlistProvider>
     
  );
}

export default App;
