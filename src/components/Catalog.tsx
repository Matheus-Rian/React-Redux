import { useCallback, useEffect, useState } from 'react';
import { Product } from "../store/modules/cart/models";
import api from "../services/api";
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

export function Catalog() {
  const dispatch = useDispatch()
  const [catalogs, setCatalogs] = useState<Product[]>([]);

  useEffect(() => {
    api.get('products')
      .then(response => setCatalogs(response.data))
  }, []);

  const handleAddProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCart(product));
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalogs.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> { " - " }
          <span>{product.price}</span> { "  " }

          <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
        </article>
      ))}
    </main>
  )
}