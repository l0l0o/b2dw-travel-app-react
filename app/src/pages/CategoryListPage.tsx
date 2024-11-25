import { useState } from "react";
import CategoryList from "../components/CategoryList";
import FormCategory from "../components/FormCategory";
import { findAll } from "../services/category.services";
import { CategoryType } from "../types/category.type";

const CategoryListPage = () => {
    const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

    const fetchCategories = async () => {
      try {
        const categories = await findAll();
        setCategoryList(categories);
      } catch (error) {
        console.log("Error to fetch travels", error);
      }
    };
  
    return (
      <div className="">
        <h1 className="text-4xl text-red-400 mb-10">Travel categories</h1>
  
        <FormCategory />
  
        <CategoryList
            categoryList={categoryList}
            fetchCategories={fetchCategories}
        />
      </div>
    );
  }
 
export default CategoryListPage;