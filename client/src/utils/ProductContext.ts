/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React , { Dispatch, SetStateAction } from "react";
import { EditModel } from './interface'


const ProductContext = React.createContext<EditModel>({
    productsState: [],
    setProducts: () => {},
  });


export default ProductContext;