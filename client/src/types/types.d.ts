import { Dispatch, SetStateAction } from "react";

export type IProductEdit = {
  name: string | undefined;
  price: number;
  quantity: number;
};

export type IProduct = {
    name: string | undefined;
    price: number;
    quantity: number;
    product_id: string | undefined;
  };

export type StoreModel = {
    saleState: IProduct[] | [];
    setProducts: any;
    totalState: number;
    setTotal: (value: number) => void;
}

export type EditModel = {
  productsState: IProduct[] | [];
  setProducts: Dispatch<SetStateAction<never[]>>;
}

export type LoginProps = {
  setLogin: (value: string) => void;
}
