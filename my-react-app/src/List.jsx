
function List() {

    const fruits = [
        { id: 1, name: 'durian', calories: 95 },
        { id: 2, name: 'banana', calories: 45 },
        { id: 3, name: 'mango', calories: 105 },
        { id: 4, name: 'strawberry', calories: 159 },
        { id: 5, name: 'melon', calories: 37 }
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    return (<ul>{listItems}</ul>);
}

export default List;