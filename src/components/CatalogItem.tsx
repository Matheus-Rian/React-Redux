import { useCallback } from 'react';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { Product } from '../store/modules/cart/models';
import { useDispatch, useSelector } from 'react-redux';
import { IStateStore } from '../store';

interface CatalogItemProps {
  product: Product
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IStateStore, boolean>(state => {
    return state.cart.failedStockChecked.includes(product.id);
  })

  const handleAddProductToCartRequest = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> { " - " }
      <span>{product.price}</span> { "  " }

      <button type="button" onClick={handleAddProductToCartRequest}>Comprar</button>

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span> }
    </article>
  );
}
