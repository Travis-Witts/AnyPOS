import React, { useRef, useState} from 'react';
import './style.scss';
import axios from 'axios';

type IEditProps = {
  storeId: string;
};

type IProduct = {
  name: string | undefined,
  price: number | undefined,
  quantity: number | undefined
}

const EditContainer: React.FC<IEditProps> = ({ storeId }: IEditProps) => {
  const [nameState, setName] = useState<string | undefined>('');
  const [priceState, setPrice] = useState<string | undefined>('');
  const [quantityState, setQuantity] = useState<string | undefined>('');
  // Product references
  const productNameRef = useRef<HTMLDivElement>(null);
  const productPriceRef = useRef<HTMLDivElement>(null);
  const productQuantityRef = useRef<HTMLDivElement>(null);

  const newProductHandler = async () => {
    const productBody: IProduct = {
      name: productNameRef.current?.innerText,
      price: Number(productPriceRef.current?.innerText),
      quantity: Number(productQuantityRef.current?.innerText)
    }
    await axios.post("/product", productBody)
  };
  return (
    <div className="main">
      <div className="product-container-row">
        <div className="new-product-col">
          {' '}
          New Product:
          <div className="product">
            <h1>Name:</h1>{' '}
            <div contentEditable="true" ref={productNameRef}>
              {' '}
              {nameState}{' '}
            </div>
            <h1>Price:</h1>{' '}
            <div contentEditable="true" ref={productPriceRef}>
              0
            </div>
            <h1>Quantity:</h1>{' '}
            <div contentEditable="true" ref={productQuantityRef}>
              0
            </div>
            <button onClick={newProductHandler} type="submit" className="new-product">
            Save
          </button>
          </div>
        </div>
        <div className="product-list-col">
          Product List:
          <div className="product-list">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
