import axios, { AxiosRequestConfig } from "axios";
import { Brand, Product } from "./type";

export async function GetProductId(id: string) {
  const url = "http://localhost:4000/api/products/";
  const res = await axios.get(url + id);
  console.log("🚀 ~ file: api.tsx:7 ~ GetProductId ~ res:", res)
  return res.data?.product;
}
export async function UpdateProduct(props: { product: Product; brand: Brand }) {
  const url = "http://localhost:4000/api/products/";
  const res = await axios.put(url, {
    product: props.product,
    brand: props.brand,
  });
  return res;
}

export async function DeleteProduct(id: string) {
  const url = "http://localhost:4000/api/products/";
  console.log(id + "ssss");
  const res = await axios.delete(url, { method: "delete", data: id });
  console.log(res.data);
  return res.data;
}
