import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "e9f005c21f4f431298c75be0c03f9a78"

export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("");
    useEffect(()=>{
      async  function fetchFood(){
        const res = await   fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
           
        }
        fetchFood()
         
    }, [query])
    return(
        <div className="search">
            <input className="data" value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
        </div>
    )
}