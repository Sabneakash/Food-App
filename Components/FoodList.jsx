import Fooditem from "./Fooditem";

export default function FoodList({foodData, setFoodId}){
    return(
        <div>
            {foodData.map((food)=>(
                <Fooditem setFoodId={setFoodId} key={food.id} food={food}/>
        // <h1 key={food.title}>{food.id}</h1>
      ))}
        </div>
    )
}