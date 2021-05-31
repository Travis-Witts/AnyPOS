/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { EditModel } from './Interface'


const ProductContext = React.createContext<EditModel>({
    productsState: [],
    setProducts: () => {},
  });


export default ProductContext;