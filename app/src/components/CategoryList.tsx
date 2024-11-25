import { useEffect } from "react";
import { CategoryType } from "../types/category.type";
import CardCategory from "./CardCategory";

type CategoryListProps = {
    categoryList: CategoryType[],
    fetchCategories: () => void
}

const CategoryList = ({categoryList, fetchCategories}: CategoryListProps) => {
    useEffect(() => {
        fetchCategories()
    }, [])
    
    return ( 
        <div className="grid grid-cols-3 gap-4">
            {categoryList.map(category => <CardCategory category={category} key={category.id} />)}
        </div>
     );
}
 
export default CategoryList;