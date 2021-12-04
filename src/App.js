import './App.css';
import foods from './foods.json';
import { useState } from 'react'
import { Row, Divider} from "antd";
import FoodBox from './components/FoodBox/FoodBox'
import AddFoodForm from './components/AddFoodForm/AddFoodForm';



function App() {

  const [foodList, setFoodList] = useState(foods)

  const deletedFood = (foodDelete) => {
    const removeFood = foodList.filter((food) => {
      return food.name !== foodDelete;
    });
    setFoodList(removeFood);
  };

  return (
    <div className="App">
     
     {/* <Button> Hide Form / Add New Food </Button> */}
     <AddFoodForm foodsList={foodList} setFood={setFoodList}  />

     <Divider>Food List</Divider>

     <Row style={{ width: "100%", justifyContent: "center" }}> 
        {foodList.map(food => {
          return(
              <FoodBox food={food} deletedFood={deletedFood}/> 
          )
        })}
      </Row>
    </div>
  );
}

export default App;
