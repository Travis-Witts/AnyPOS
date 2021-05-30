/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Dispatch, SetStateAction } from "react";


type IProduct = {
    name: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
    product_id: string | undefined;
  };

type StoreModel = {
    saleState: IProduct[] | [];
    setProducts: Dispatch<SetStateAction<IProduct[]>>;
}


const SaleContext = React.createContext<StoreModel>({
    saleState: [],
    setProducts: () => {},
  });


export default SaleContext;