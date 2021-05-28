import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import axios from 'axios';


const AccountContainer: React.FC = () => {
  const [nameState, setName] = useState<string | undefined>('');
  const [descriptionState, setDescription] = useState<string | undefined>('');
  // Store references
  const storeNameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const setShop = async () => {
    const store = await axios.get('/store');
    setName(store.data.name)
    setDescription(store.data.description)
  };

  useEffect(() => {
    void setShop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="account-container" />;
};

export default AccountContainer;
