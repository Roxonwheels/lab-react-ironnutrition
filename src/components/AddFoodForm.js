import { Divider, Input } from "antd";

function AddFoodForm(props) {
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>

      <label>Calories</label>

      <label>Servings</label>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;