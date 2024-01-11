/* eslint-disable no-unused-vars */
import axios from 'axios';
import { atom, selector } from 'recoil';

const baseURL = 'http://localhost:8000/products/';

// atom
export const productListState = atom({
  key: 'product/productListState',
  default: [],
});

export const productState = atom({
  key: 'product/productState',
  default: {
    id: '',
    name: '',
    price: '',
    discount: '', 
    barcode: '',
    expiration: '',
    description: '',
    finalPrice: ''
  },
});

// selector
export const productSelector = selector({
  key: 'product/productSelector',
  get: ({ get, getCallback }) => {
    const getProductList = getCallback(({ set }) => async (page, pageSize) => {
      const resp = await axios.get(baseURL, { params: { page, pageSize } });
      set(productListState, resp.data);
    });

    const getProduct = getCallback(
      ({ set }) =>
        async (id) => {
          const resp = await axios.get(`${baseURL}${id}`);
          set(productState, resp.data.product);
        },
      []
    );

    const updateProduct = getCallback(({ set }) => async (item) => {
      const resp = await axios.put(`${baseURL}`, item);
      // console.log('update', resp);
    });

    const addProduct = getCallback(({ set }) => async (item) => {
      const resp = await axios.post(`${baseURL}`, item);
      // console.log('insert', resp);
    });

    const removeProduct = getCallback(({ set }) => async (id) => {
      const resp = await axios.delete(`${baseURL}${id}`);
      console.log('delete', resp);
    });

    return { getProductList, getProduct, updateProduct, addProduct, removeProduct };
  },
});
