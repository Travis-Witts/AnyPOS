/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import axios from 'axios';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import EditProduct from '../../EditProduct';
import ProductContext from '../../../context/ProductContext';
import { EditModel, IProduct } from '../../../types/types';

const EditStockPage: React.FC = () => {
  const { productsEditState, setEditProducts } =
    useContext<EditModel>(ProductContext);
  const [searchState, setSearch] = useState<IProduct[] | []>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const getProducts = async () => {
    const products = await axios.get('/product');
    setEditProducts(products.data);
    setSearch(products.data);
  };

  const handleInputChange = () => {
    const matches = productsEditState.filter(card => {
      const { name } = card;
      if (searchRef.current) {
        const search = searchRef.current.value;
        if (name.includes(search)) {
          return true;
        }
        return false;
      }
    });
    setSearch(matches);
  };

  useEffect(() => {
    void getProducts();
  }, []);
  return (
    <div className="edit-items-container">
      <div className="edit-items-header">Edit Your Stock</div>
      <NavLink exact to="/profile" className="edit-back-arrow">
        <Arrow className="back-arrow" />
      </NavLink>
      <div className="edit-item-card edit-cards">
        <div className="search-section">
          <p className="edit-store-h2">Search:</p>
          <input
            className="sale-search"
            type="text"
            ref={searchRef}
            onChange={handleInputChange}
          />
        </div>
        <div className="stock-container">
          <div id="col-edit-name" className="sale-product-col">
            Name
          </div>
          <div id="col-edit-cost" className="sale-product-col">
            Cost
          </div>
          <div id="col-edit-price" className="sale-product-col">
            Price
          </div>
          <div id="col-edit-quantity" className="sale-product-col">
            Quantity
          </div>
          <div id="col-edit-actions" className="sale-product-col">
            Actions
          </div>
          {searchState.length ? (
            <React.Fragment>
              {searchState.map((product: IProduct) => (
                <EditProduct
                cost={product.cost}
                description={product.description}
                  product_id={product.product_id}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}{' '}
            </React.Fragment>
          ) : (
            <h4 className="col-edit-price">No Products to display.</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditStockPage;
