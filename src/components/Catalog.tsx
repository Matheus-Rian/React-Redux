import { useEffect, useState } from 'react';
import { Product } from "../store/modules/cart/models";
import api from "../services/api";
import { CatalogItem } from './CatalogItem';

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
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}