import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/actions';
import ProductCard from './ProductCard';

const Discovery = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div id="discovery">
      <h2>Discover AI Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Discovery;