import { CategoryType } from "../types/category.type";

type CardCategoryProps = {
    category: CategoryType
}

const CardCategory = ({category}: CardCategoryProps) => {
    return ( 
        <div>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
        </div>
     );
}
 
export default CardCategory;