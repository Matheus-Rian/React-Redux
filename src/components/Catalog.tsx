import { useEffect, useState } from 'react';
import { Product } from "../store/modules/cart/models";
import api from "../services/api";

export function Catalog() {
  const [catalogs, setCatalogs] = useState<Product[]>([]);

  useEffect(() => {
    api.get('products')
      .then(response => setCatalogs(response.data))
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalogs.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> { " - " }
          <span>{product.price}</span> { "  " }

          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  )
}