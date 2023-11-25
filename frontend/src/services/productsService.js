
export const getProducts = async () => {

  const response = await fetch('http://localhost:8080/products');
  const products = await response.json();

  return products;
}

export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity
    , 0);
}
