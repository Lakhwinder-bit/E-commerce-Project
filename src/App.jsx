import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRouter";
import { WishlistProvider } from "./context/wishListContext";


function App() {
  return (
   
   <WishlistProvider>   {/* ✅ MUST WRAP EVERYTHING */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WishlistProvider>
     
  );
}

export default App;
