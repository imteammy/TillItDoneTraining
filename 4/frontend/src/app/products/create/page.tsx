"use client";
import React, { useState } from "react";
import { Brand, CreateProductAPI, Product } from "./api";

export default function CreateProduct() {
  const [userId, setUserId] = useState(1);
  const [product, setProduct] = useState<Product>({
    name: "",
    price: Number(0),
    image: "",
    banner: "",
    description: "",
  });
  const [brand, setBrand] = useState<Brand>({
    name: "",
    image: "",
    banner: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await CreateProductAPI(userId, product, brand);
    console.log(response);
  };
  const handleProductChange = (e: any) => {
    console.log(product);
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };
  const handleBrandChange = (e: any) => {
    console.log(brand);
    const { name, value } = e.target;
    setBrand((prevBrand) => ({ ...prevBrand, [name]: value }));
  };

  return (
    <div className="container mx-auto grid justify-center mt-6">
      <div>
        <h1 className="text-3xl my-6">Create Product</h1>
      </div>
      <div>
        <form>
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
                onChange={handleProductChange}
                id="price"
                name="price"
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
                id="image"
                name="image"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="image"
                required
              />
            </div>
            <div>
              <label
                htmlFor="banner"
                className="block mb-2 text-sm font-medium text-black"
              >
                Banner
              </label>
              <input
                type="text"
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
              id="Description"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description..."
              required
            />
          </div>

          {/* Brand */}
          <div className="my-6">
            <p className="text-xl mb-6">Brand</p>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Brand name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Brand Image
                </label>
                <input
                  type="url"
                  min={0}
                  id="image"
                  name="image"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="image"
                  required
                />
              </div>
              <div>
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
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="banner"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
