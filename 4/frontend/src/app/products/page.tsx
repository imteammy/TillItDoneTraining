"use client";
import React, { useEffect } from "react";
import { DeleteProductPage, GetAllProducts } from "./products.api";
import { Product } from "./edit/[id]/type";
import { Table } from "antd";
import Link from "next/link";
const { Column } = Table;
export async function Fetch() {}
function Index() {
  const [products, setProducts] = React.useState();
  const loadProducts = async () => {
    const response = await GetAllProducts();
    setProducts(response);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  if (!products) {
    return (
      <>
        <div className="grid place-items-center h-screen text-4xl">
          Loading...
        </div>
      </>
    );
  }
  const Data = (props: { data: any }) => {
    return (
      <>
        <Table dataSource={props.data}>
          <Column
            title="Name"
            dataIndex="name"
            key="name"
            render={(name) => <p className="font-semibold text-xl">{name}</p>}
          />
          <Column
            title="Price"
            dataIndex="price"
            key="price"
            render={(price) => <span>{Number(price)}</span>}
          />
          <Column
            title="Image"
            dataIndex="image"
            key="image"
            render={(image) => (
              <img src={image} alt="Image" width={150} height={150} />
            )}
          />
          <Column
            title="Banner"
            dataIndex="banner"
            key="banner"
            render={(banner) => (
              <img src={banner} alt="Banner" width={150} height={150} />
            )}
          />
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />
          <Column
            title="Published"
            dataIndex="published"
            key="published"
            render={(published) => (published ? "True" : "False")}
          />
          <Column title="Owner ID" dataIndex="ownerId" key="ownerId" />
          <Column
            title="Id"
            dataIndex="id"
            key="id"
            render={(id) => (
              <>
                <div className="flex gap-3">
                  <Link
                    href={`/products/edit/${id}`}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Edit
                  </Link>
                  <DeleteProductPage />
                </div>
              </>
            )}
          />
        </Table>
      </>
    );
  };
  return (
    <>
      <div className=" px-16 mt-10">
        <h1 className="text-3xl font-medium flex justify-center m-6">
          All Products
        </h1>
        <Data data={products} />
      </div>
    </>
  );
}

export default Index;
