import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [car, setCar] = useState({ year: 2007, make: 'Mini', model: 'One' });
    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar() {

        const newCar = { year: carYear, make: carMake, model: carModel };

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    const updateName = () => {
        setName('Hans');
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} >{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood} >Add Food</button>

            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)} >
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make' /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model' />
            <button onClick={handleAddCar}>Add car</button><hr />

            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <hr />
            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label><br />
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}

export default MyComponent;