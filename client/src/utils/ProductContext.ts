/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React , { Dispatch, SetStateAction } from "react";


type IProduct = {
    name: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
    product_id: string | undefined;
  };

type StoreModel = {
    productsState: IProduct[] | [];
    setProducts: Dispatch<SetStateAction<never[]>>;
}


const ProductContext = React.createContext<StoreModel>({
    productsState: [],
    setProducts: () => {},
  });


export default ProductContext;