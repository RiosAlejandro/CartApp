/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService.js";
import { CatalogItem } from "./CatalogItem.jsx";

export const CatalogView = ({handler}) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAll = async () => {
    const productBackend = await getProducts();
    setProducts(productBackend);
    setIsLoading(false);
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      {
        isLoading && <div className="alert alert-info">Cargando...</div>
      }
      <div className="row">
        { products.map(prod => (
          <div className="col-4 my-2" key={prod.id}>
            <CatalogItem 
                handler={handler}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
            />
          </div>
        )) }
      </div>
    </>
  );
}
