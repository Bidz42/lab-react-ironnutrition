import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({ addFoodHandler }) {
  //set states for all our properties
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  //handle changes to target values
  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);
  //handle submit to prevent default
  const handleSubmit = (e) => {
    e.preventDefault();
    //define new food and its properties
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    //add the food into the list and then reset values back to blank
    addFoodHandler(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (

    <form onSubmit={handleSubmit}>

      <Divider>Add A Food</Divider>

      <label>Name</label>
      <Input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleName}
      />

      <label>Image</label>
      <Input
        type="text"
        placeholder="Add image URL here"
        value={image}
        onChange={handleImage}
      />

      <label>Calories</label>
      <Input type="number" value={calories} onChange={handleCalories} />

      <label>Servings</label>
      <Input type="number" value={servings} onChange={handleServings} />

      <button type="submit">Create</button>
      
    </form>
  );
}

export default AddFoodForm;