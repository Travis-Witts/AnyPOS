import React, { Dispatch, SetStateAction } from "react";

export type IProductEdit = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
};

export type IProduct = {
    name: string | undefined;
    price: number | undefined;
    quantity: number;
    product_id: string | undefined;
  };

export type StoreModel = {
    productsState: IProduct[] | [];
    setProducts: any;
}

export type EditModel = {
  productsState: IProduct[] | [];
  setProducts: Dispatch<SetStateAction<never[]>>;
}

export type LoginProps = {
  setLogin: (value: string) => void;
}