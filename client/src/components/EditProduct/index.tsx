import axios from 'axios';
import React, { useRef, useState, useEffect, useContext } from 'react';
import './style.scss';
import ProductContext from '../../context/ProductContext';
import { IProduct } from '../../types/types';



const EditProduct: React.FC<IProduct> = ({
  name,
  price,
  quantity,
  product_id,
}: IProduct) => {
  const [priceState, setPrice] = useState<number | undefined>(0);
  const [quantityState, setQuantity] = useState<number | undefined>(0);
  const { setEditProducts } = useContext(ProductContext)


  // Product references
  const productPriceRef = useRef<HTMLInputElement>(null);
  const productQuantityRef = useRef<HTMLInputElement>(null);

  const deleteHandler = async () => {
    const config = {
      data: {
        id: product_id,
      },
    };
    try {
      await axios.delete('/product', config);
      const newProducts = await axios.get('/product')
      setEditProducts(newProducts.data)
      alert("Item has been deleted successfully!")
    } catch (error) {
      console.log(error);
      alert("Item failed to delete!")
    }

  };
  const saveHandler = async () => {
    try {
      await axios.put('/product', {
        id: product_id,
        value: productPriceRef.current?.value,
        quantity: productQuantityRef.current?.value,
      });
      const newProducts = await axios.get('/product')
      setEditProducts(newProducts.data)
      alert("Item has been edited successfully!")
    } catch (error) {
      console.log(error);
      alert("Item editing failed!")
    }

  };

  useEffect(() => {
    setPrice(price);
    setQuantity(quantity);
  }, []);

  return (
    <React.Fragment>
      <div className="col-edit-name">
        <p>{name}</p>
      </div>
      <div className="col-edit-cost">
        <input
          className="input-col"
          type="text"
          defaultValue={price}
        />
      </div>
      <div className="col-edit-price">
        <input
          className="input-col"
          type="text"
          defaultValue={price}
          ref={productPriceRef}
        />
      </div>
      <div className="col-edit-quantity">
        <input
          className="input-col"
          type="text"
          defaultValue={quantity}
          ref={productQuantityRef}
        />
      </div>
      <div className="col-edit-actions">
        <button
          className="btn btn-outline-dark"
          onClick={deleteHandler}
          type="submit"
        >
          Delete
        </button>
        <button
          className="btn btn-outline-info"
          onClick={saveHandler}
          type="submit"
        >
          Save
        </button>
      </div>
      </React.Fragment>
  );
};

export default EditProduct;
