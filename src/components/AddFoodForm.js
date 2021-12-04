import { Divider, Input } from "antd";
import { useState } from "react";

const AddFoodForm = (props)=> {

    const {foodList, setFoodList} = props

    const [inputName, setInputName] = useState('')
    const [inputImage, setInputImage] = useState('')
    const [inputCalories, setInputCalories] = useState(0)
    const [inputServings, setInputServings] = useState(0)

    const addFood = () => {
        const foodListCopy = [...foodList]
        foodListCopy.push({
            name: inputName,
            image: inputImage,
            calories: inputCalories,
            servings: inputServings,
        });
        setFoodList(foodListCopy)
        // setNotFilteredFoodsList(foodListCopy)
    }
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input type="text" onChange={(e) => setInputName(e.target.value)} />

      <label>Image</label>
      <Input type="text" onChange={(e) => setInputImage(e.target.value)} />


      <label>Calories</label>
      <Input type="number" onChange={(e) => setInputCalories(e.target.value)}/>


      <label>Servings</label>
      <Input type="number" onChange={(e) => setInputServings(e.target.value)} />

      <button onClick={() => addFood()}>Create</button>
    </form>
  );
}

export default AddFoodForm;