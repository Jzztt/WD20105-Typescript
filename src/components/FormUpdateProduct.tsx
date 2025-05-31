import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router'
import { ProductSchema, type ProductSchemaType } from '../schemas/product';
import { zodResolver } from '@hookform/resolvers/zod';

const FormUpdateProduct = () => {
  const {id} = useParams();
    const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductSchemaType>({ resolver: zodResolver(ProductSchema) });
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const fetchProductResponse = await axios.get(`http://localhost:3000/products/${id}`);
    const {name, price, description, category} = fetchProductResponse.data;
    setValue("name", name);
    setValue("price", price);
    setValue("description", description);
    setValue("category", category);
  }
  const updateProduct = async (product: ProductSchemaType) => {
    axios.put(`http://localhost:3000/products/${id}`, product);
    navigate("/products");

  }
  const onSubmit = (value: ProductSchemaType) => {
    updateProduct(value);
  }

  useEffect(()=> {
    fetchProduct();
  },[id]);

  return (
    <div className="w-[500px] mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold">Update Product</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="name">
            Product Name
          </label>
          <input
            {...register("name")}
            className={`border w-full ${
              errors.name
                ? "border-red-500 outline-red-500"
                : "border-gray-300"
            }  rounded-lg p-2`}
            type="text"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="price">
            Price
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            className="border w-full border-gray-300 rounded-lg p-2"
            type="number"
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="description">
            Description
          </label>
          <textarea
            {...register("description")}
            className="border w-full border-gray-300 rounded-lg p-2"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        <div className="mt-2">
          <label className="font-medium mb-2 block" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            className="border w-full border-gray-300 rounded-lg p-2"
          >
            <option value=""> Select category</option>
            <option value="Laptop">Laptop</option>
            <option value="SmartPhone">SmartPhone</option>
          </select>
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-2 px-4 text-white rounded-lg mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormUpdateProduct