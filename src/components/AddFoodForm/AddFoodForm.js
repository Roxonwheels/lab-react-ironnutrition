import './AddFoodForm.css'
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
    }

    return (
        <form className="AddFoodForm">
            <Divider>Add Food Entry</Divider>
            
            <p>Name</p>
            <Input type="text" onChange={(event) => setInputName(event.target.value)} />

            <p>Image</p>
            <Input type="text" onChange={(event) => setInputImage(event.target.value)} />

            <p>Calories</p>
            <Input type="number" onChange={(event) => setInputCalories(event.target.value)}/>

            <p>Servings</p>
            <Input type="number" onChange={(e) => setInputServings(e.target.value)} />
            <div>
                <button onClick={() => addFood()}>Create</button>
            </div>
        </form>
    );
}

export default AddFoodForm;