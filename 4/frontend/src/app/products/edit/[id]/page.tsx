"use client";
import React, { useEffect, useState } from "react";
import { GetProductId } from "./api";
import { Product, Props } from "./type";
import From from "./from";
import Link from "next/link";
export default function Page({ params: { id } }: Props) {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    async function fetchData() {
      const response = await GetProductId(id);
      setProduct(response);
    }
    fetchData();
  }, [id]);

  if (!product) {
    return (
      <>
        <div className="grid justify-center items-center place-items-center h-screen text-4xl">
          <div className="justify-center flex flex-col">
            Loading...
            <p>
              {id}
            </p>
          </div>

        </div>
      </>
    );
  }

  return (
    <>
      <From data={product} />
    </>
  );
}
