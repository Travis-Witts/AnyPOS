import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import axios from 'axios';
import StaticInput from '../StaticInput';

const AccountContainer: React.FC = () => {
  const [nameState, setName] = useState<string | undefined>('');
  const [descriptionState, setDescription] = useState<string | undefined>('');
  // Store references
  const storeNameRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const clickHandler = async () => {
    const newStoreBody = {
      name: storeNameRef.current?.innerText,
      description: descriptionRef.current?.innerText,
    };
    const newStore = await axios.put('/store', newStoreBody);
  };

  const setShop = async () => {
    const store = await axios.get('/store');
    setName(store.data.name);
    setDescription(store.data.description);
  };

  useEffect(() => {
    void setShop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <div className="account-container">
        <div className="analysis-col">
          <h1>Daily Sales Analysis:</h1>
          <div className="analysis">
            Analysis{' '}
            <div>
              <StaticInput
                classes="daily-sales"
                label="Daily Sales"
                text="100"
              />
            </div>
          </div>
        </div>
        <div className="account-col">
          Edit Your Profile:
          <div className="edit-profile">
            <h1>Edit your store name:</h1>{' '}
            <div contentEditable="true" ref={storeNameRef}>
              {' '}
              {nameState}{' '}
            </div>
            <h1>Edit your description:</h1>{' '}
            <div
              contentEditable="true"
              className="description"
              ref={descriptionRef}
            >
              {' '}
              {descriptionState}{' '}
            </div>
            <button onClick={clickHandler} type="submit" className="save-shop">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountContainer;
