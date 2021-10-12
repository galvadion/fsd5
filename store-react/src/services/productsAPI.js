import { fetchData } from "./apiConsumer";

export const getProducts = (onSuccess, onFail) => fetchData('http://localhost:4000/products', {},onSuccess,onFail)