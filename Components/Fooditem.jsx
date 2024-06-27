export default function Fooditem({food, setFoodId}){
    return(
        <div className="item">
            <img className="item2" src={food.image} alt="" />
            
            <div className="contain">
            <p className="contain2" key={food.title}>{food.title}</p>
            </div>

            <div className="btn">
            <button onClick={()=>{console.log(food.id), setFoodId(food.id)}} className="btn1">View Recipe</button>

            </div>

            
            
        </div>
    )
}