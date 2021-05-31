/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { StoreModel } from './interface'

const SaleContext = React.createContext<StoreModel>({
    saleState: [],
    setProducts: () => {},
  });


export default SaleContext;