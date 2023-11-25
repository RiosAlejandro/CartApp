import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routes/CartRoutes";

function App() {

  const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1>Cart App</h1>
        <CartRoutes 
            cartItems={cartItems}
            handlerAddProductCart={handlerAddProductCart}
            handlerDeleteProductCart={handlerDeleteProductCart}
        />
      </div>
    </>
  );
}

export default App;
