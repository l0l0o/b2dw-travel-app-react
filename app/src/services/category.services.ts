import { CategoryDTO } from "../types/category.type";

const API_URL = import.meta.env.VITE_API_URL;

export const findAll = async () => {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();
  return data;
};

export const findOneById = async (id: string) => {
  const response = await fetch(`${API_URL}/categories/${id}`);
  const data = await response.json();
  return data;
};

export const create = async (categorie: CategoryDTO) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categorie),
  });
  const data = await response.json();
  return data;
};

export const remove = async (id: string) => {
  return await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};