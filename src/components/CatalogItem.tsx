import { useCallback } from 'react';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { Product } from '../store/modules/cart/models';
import { useDispatch } from 'react-redux';

interface CatalogItemProps {
  product: Product
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCartRequest = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> { " - " }
      <span>{product.price}</span> { "  " }

      <button type="button" onClick={handleAddProductToCartRequest}>Comprar</button>
    </article>
  );
}
