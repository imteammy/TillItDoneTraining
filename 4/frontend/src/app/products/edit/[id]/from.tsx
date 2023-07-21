import React, { useState } from "react";
import { DeleteProduct, UpdateProduct } from "./api";
import { Product } from "./type";
import { Brand } from "../../create/api";
import Link from "next/link";
import { message } from "antd";

const FromPage = (props: { data: Product }) => {
  const p = props.data;
  const [product, setProduct] = useState<Product>({
    id: p.id,
    name: p.name,
    image: p.image,
    banner: p.banner,
    price: Number(p.price),
    description: p.description,
    published: p.published,
    ownerId: p.ownerId,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  });
  const [brand, setBrand] = useState({
    id: Number(p.Brand?.id),
    name: p.Brand?.name,
    image: p.Brand?.image,
    banner: p.Brand?.banner,
    brandOwner: p.Brand?.brandOwner,
  });
  const [message, setMessage] = useState<String>("");
  const productChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProduct((states: any) => ({
      ...states,
      [name]: value,
    }));
  };

  const brandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrand((states: any) => ({
      ...states,
      [name]: value,
    }));
  };

  async function submitDelete(e: any) {
    e.preventDefault();
  }

  async function submitUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result: any = await UpdateProduct({ product, brand });
    console.log("🚀 ~ file: from.tsx:57 ~ submitUpdate ~ result:", result.data)
    setMessage(result.message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <>
      <div className="container mx-auto px-10 sm:px-0 sm:grid justify-center mt-6">
        <div>
          {!message ? (
            ""
          ) : (
            <div className="font-medium font-mono text-xl flex justify-center mx-auto  text-lime-500">
              {message}
            </div>
          )}
          <h1 className="text-xl my-6">Edit Product</h1>
        </div>
        <div>
          <form onSubmit={submitUpdate}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Product name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={productChange}
                  value={product.name}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Price
                </label>
                <input
                  type="number"
                  value={product.price}
                  min={0}
                  id="price"
                  name="price"
                  onChange={productChange}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="price"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Image"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Image
                </label>
                <input
                  type="text"
                  onChange={productChange}
                  value={
                    !product.image ? "Image is null" : product.image?.toString()
                  }
                  id="image"
                  name="image"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="image"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Banner"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Banner
                </label>
                <input
                  type="text"
                  onChange={productChange}
                  value={!product?.banner ? "Banner is null" : p.banner}
                  id="banner"
                  name="banner"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="banner"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-black"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={productChange}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={
                  !product.description
                    ? "Description is not available"
                    : "Description..."
                }
                required
              />
            </div>
            <div className="my-6">
              <div key={product?.id} className="my-6">
                <p className="text-xl mb-6">Brand</p>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="Name"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Brand name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={brandChange}
                      value={brand?.name}
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="Image"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Brand Image
                    </label>
                    <input
                      type="text"
                      min={0}
                      id="image"
                      name="image"
                      onChange={brandChange}
                      value={brand?.image}
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="image"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="banner"
                      className="block mb-2 text-sm font-medium text-black"
                    >
                      Brand banner
                    </label>
                    <input
                      type="text"
                      id="banner"
                      name="banner"
                      onChange={brandChange}
                      value={brand?.banner}
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="banner"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 grid  grid-cols-2 gap-2 ">
              <button
                type="submit"
                className="col-span-2 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
              <button
                type="submit"
                onClick={submitDelete}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete
              </button>
              <Link
                href="/products"
                type="submit"
                className="text-white bg-stone-700-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FromPage;
