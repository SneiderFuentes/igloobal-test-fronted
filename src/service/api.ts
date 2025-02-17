import axios from "axios";


const API_URL = "http://localhost:5042/api/products"; 


export const getProducts = () => axios.get(API_URL);

export const addProduct = (product: { name: string; description: string; price: number }) => 
  axios.post(API_URL, product);


export const updateProduct = (product: { id: number; name: string; description: string; price: number }) =>
  axios.put(`${API_URL}/${product.id}`, product);


export const deleteProduct = (id: number) => axios.delete(`${API_URL}/${id}`);