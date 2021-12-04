import './App.css';
import foods from './foods.json';
import { useState } from 'react'
import { Row, Divider, Button } from "antd";
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';



function App() {
  const [foodList, setFoodList] = useState(foods)
 


  return (
    <div className="App">
     


     <Button> Hide Form / Add New Food </Button>
     <AddFoodForm foodsList={foodList} setFood={setFoodList}  />

     <Divider>Food List</Divider>

     <Row style={{ width: "100%", justifyContent: "center" }}> 
        {foods.map(food => {
          return(
              <FoodBox food={food} /> 
          )
        })}
      </Row>
    </div>
  );
}

export default App;
