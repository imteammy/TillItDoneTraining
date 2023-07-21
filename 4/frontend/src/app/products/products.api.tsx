import { Popconfirm } from "antd";
import axios from "axios";
import { useState } from "react";

export async function GetAllProducts() {
  const response = await axios.get("http://localhost:4000/api/products");
  return response.data.products;
}

export const DeleteProductPage = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    setTimeout(() => {
      alert("Delete Product successfully");
    }, 1000);
  };

  const handleCancel = () => {
    setConfirmDelete(false);
  };

  return (
    <Popconfirm
      title="คุณแน่ใจหรือไม่ที่จะลบผลิตภัณฑ์นี้?"
      onConfirm={handleDelete}
      onCancel={handleCancel}
      okText={<span className="text-black">ใช่</span>}
      cancelText="Cancel"
      className="text-black"
    >
      <button
        onClick={() => setConfirmDelete(true)}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
      >
        Delete
      </button>
    </Popconfirm>
  );
};
