import { fetchData } from "./apiConsumer";

export const getProducts = (onSuccess, onError) => fetchData(`http://localhost:4000/products`,{},onSuccess,onError)