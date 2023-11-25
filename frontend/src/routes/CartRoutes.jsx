/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";

export const CartRoutes = ({cartItems, handlerAddProductCart, handlerDeleteProductCart}) => {

  return (
    <Routes>
      <Route path="catalog" element={<CatalogView handler={handlerAddProductCart} />} />
      <Route 
          path="cart" 
          element={(           
            cartItems?.length <= 0 
            ? <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
            : (<CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>)
          )} 
      />
      <Route path="/" element={ <Navigate to={'/catalog'} /> } />
    </Routes>
  );
}
