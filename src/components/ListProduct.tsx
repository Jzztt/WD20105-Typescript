import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}
const ListProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3000/products/${id}`);
    // Cập nhật lại dữ liệu
    // setProducts(products.filter((product)=> product.id !== id));
    fetchProducts();
  };

  const fetchProducts = async () => {
    const fetchProductResponse = await axios.get(
      "http://localhost:3000/products"
    );
    setProducts(fetchProductResponse.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td>
                  <button
                    className="bg-red-500 text-white px-4 py-2 border rounded hover:bg-red-600"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/update-product/${product.id}`}
                   className="bg-blue-500 text-white px-4 py-2 border rounded hover:bg-blue-600">
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListProduct;
