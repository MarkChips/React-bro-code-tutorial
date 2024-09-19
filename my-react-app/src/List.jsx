
function List() {

    const fruits = ['durian', 'banana', 'mango', 'strawberry', 'melon']

    fruits.sort();

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (<ul>{listItems}</ul>);
}

export default List;