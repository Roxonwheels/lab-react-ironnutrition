import './App.css';
import foods from './foods.json';
import { useState } from 'react'
import FoodBox from './components/FoodBox'
import { Row, Divider, Button } from "antd";
import "antd/dist/antd.css";



function App() {
  // const [foodList, setFoodList] = useState(foods)
 


  return (
    <div className="App">
     <h1>Statessss</h1>


     <Button> Hide Form / Add New Food </Button>

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
