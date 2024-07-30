import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../services/storeApi';
import StarRating from '../starRating/StarRating';
import './_product-card.scss';

interface ProductCardProps {
  productList: Product[];
  showCategory?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ productList, showCategory }) => (
  <ul className="product-card-container">
    {productList.map((product) => (
      <li className="product-card-container-item" key={product.id}>
        <Link to={product.id.toString()} className="product-card-link">
          <div className="product-card-img-container">
            <img src={product.image} alt="" className="product-card-img" />
          </div>
          <StarRating rating={product.rating.rate} />

          <section className="product-card-content">
            <h2 className="product-card-title">{product.title}</h2>
            <p className="product-card-price">
              <span>$ </span>
              {product.price}
            </p>
          </section>
          {showCategory && (
            <p className="product-category">
              <strong>Category:</strong>{' '}
              <span className="product-category-content">
                {product.category}
              </span>
            </p>
          )}
        </Link>
      </li>
    ))}
  </ul>
);

export default ProductCard;
