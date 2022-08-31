import initialFoods from './../foods.json';
import { useState } from 'react';
import FoodBox from './../components/FoodBox';
import AddFoodForm from './../components/AddFoodForm';
import Feedback from './Feedback';
import Search from './SearchBar';
import { Button } from 'antd';
import { v4 as uuId } from 'uuid';

function FoodList() {
    //SET OUR STATES
    //One for initial foods, then a copy to render, also a state for the form set to false
    //make sure it doesnt show at beginning
    const [foods, setFoods] = useState(initialFoods);
    const [updatedFoods, setUpdatedFoods] = useState(foods);
    const [form, setForm] = useState(false);
    //now we can toggle the form but changing state to !form or true
    const toggleForm = () => setForm(!form);
    //add food with updated foods which is the food card and a copy of foods
    //then change states of set states to updatedfoods
    const addFood = (foodCard) => {
        const updatedFoods = [foodCard, ...foods];
        setFoods(updatedFoods);
        setUpdatedFoods(updatedFoods);
    };
    //conditions for search bar, if empty all foods
    //then match by character to lowercase to render foods with character
    const filterList = (char) => {
        let filterFood;

        if (char === '') {
            filterFood = foods;
        } 
        else {
            filterFood = updatedFoods.filter((aFood) => {
            return aFood.name.toLowerCase().includes(char.toLowerCase()) 
            });
        }
        setUpdatedFoods(filterFood);
    };    
    //take the foodsname and filter the array
    //single out the foods name to not be in the array
    //the change state with this filtered array
    const deleteFood = (foodsName) => {
        const filterFood = updatedFoods.filter((oneFood) => {
        return oneFood.name !== foodsName;
        });
        setUpdatedFoods(filterFood);
    };

    return (
        <div className="App">
    
        <Button onClick={toggleForm}>
            {form ? 'Hide Form' : 'Add New Food'}
        </Button>

        {form && <AddFoodForm addFoodHandler={addFood} />}

        <Search searchHandler={filterList} />

        <div>
            {!updatedFoods.length && <Feedback />}

            {updatedFoods.map((oneFood) => (
            <FoodBox food={oneFood} deleteFood={deleteFood} key={uuId()} />
            ))}
        </div>

        </div>
    );
}

export default FoodList;