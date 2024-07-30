import React from 'react';
import { useParams } from 'react-router-dom';
import useFormValidation, { FormValues } from '../hooks/useFormValidation';
import { useGetProductByIdQuery } from '../services/storeApi';
import errorMsg from '../services/utils/error';
import Button from './Button';
import Step from './formElements/numberstep/Step';

const initialFormState: FormValues = {
  count: 1,
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { values, onChange, handleClick, onSubmit } = useFormValidation({
    initialState: initialFormState,
    callback: (values) => {
      console.log('Form submitted with values: ', values);
    },
  });

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{errorMsg(error)}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <article className="product-card-big">
      <img src={product.image} alt="" />

      <section>
        <h1>{product.title}</h1>
        <p className="product-description">{product.description}</p>

        <form onSubmit={onSubmit}>
          <section>
            <div className="product-step-container">
              <p className="product-price">
                $ {product.price * Number(values.count)}
              </p>
              <Step
                onChange={onChange}
                handleClick={handleClick}
                value={values.count}
                min="1"
                labelText="Update product amount"
              />
            </div>

            <footer className="form-footer" aria-label="form">
              <Button type="submit">Add to cart</Button>
            </footer>
          </section>
        </form>
      </section>
    </article>
  );
};

export default ProductDetail;
