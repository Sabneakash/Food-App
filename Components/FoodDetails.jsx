import { useEffect, useState } from "react"
import ItemList from "./ItemList"

export default function FoodDetails({foodId}){
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "e9f005c21f4f431298c75be0c03f9a78"
    useEffect(()=>{
      async  function fetchFood(){
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data)
        setFood(data)
        setIsLoading(false)
        }
        fetchFood()

    }, [foodId])
    return(
        <div>
             <h1 className="recipe-head">Recipe Details</h1>
            <div className="recipe-card">
             {/* <h1>{foodId} </h1> */}
             <h1 className="recipe-name">{food.title}</h1>
             <img className="recipe-img" src={food.image} alt="" />

              <div className="recipe-details">
                <span>
                  <strong>Ready in {food.readyInMinutes} Minutes</strong>
                </span>

                <span>
                 <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
                </span>

                <span>
                 <strong>{food.vegetarian ? " 🥕Vegetarian🥦": "🍗Non Vegetarian🍖"}</strong>
                </span>

                <span>
                   <strong>
                  {food.vegan ?"Vegan🐄":""}
                   </strong>
                </span>
             </div>

            </div>

           <div>
              <span className="recipe-serve">
                <strong>${food.pricePerServing/100}PerServing</strong>
              </span>
           </div>
            
            <h2>Ingredients</h2>
            <ItemList food={food} isLoading={isLoading }/>
              {/* {food.extendedIngredients.map((item)=>
              (<div>
                <img src={'https://api.spoonacular.com/recipes/{id}/ingredientWidget.png'+ item.image} alt="" />
                <h3>{item.name}</h3>
                <h3>{item.amount} {item.unit}</h3>
                </div>
            
            ))} */}

           <h2 >Instructions</h2>   
           <div className="recipe-ins">
            <ol>
            {isLoading? (<p>Loading...</p>):
            (food.analyzedInstructions[0].steps.map((step)=>
                (<li>{step.step}</li>))
            )}
           </ol>
           </div>
        </div>
    )
}