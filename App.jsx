import { useState} from "react"
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css"
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";


function App(){
  const [foodData, setFoodData] =  useState([]);
  const [foodId, setFoodId]= useState("715415");
  return(
    <div>
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
      <FoodList setFoodId={setFoodId} foodData={foodData}/>
      </InnerContainer>

      <InnerContainer>
        <FoodDetails foodId={foodId}/>
      </InnerContainer>
      </Container>
    
    
      
   
      {/* {foodData.map((food)=>(
        <h1 key={food.title}>{food.id}</h1>
      ))} */}
    </div>
  )
}

export default App;
