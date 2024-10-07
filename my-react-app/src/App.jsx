import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent3 from "./MyComponent3.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {

  const fruits = [
    { id: 1, name: 'durian', calories: 95 },
    { id: 2, name: 'banana', calories: 45 },
    { id: 3, name: 'mango', calories: 105 },
    { id: 4, name: 'strawberry', calories: 159 },
    { id: 5, name: 'melon', calories: 37 }
  ];
  const vegetables = [
    { id: 6, name: 'broccoli', calories: 95 },
    { id: 7, name: 'carrot', calories: 45 },
    { id: 8, name: 'peas', calories: 105 },
    { id: 9, name: 'cabbage', calories: 159 },
    { id: 10, name: 'pepper', calories: 37 }
  ];

  return (
    <>
      <UserGreeting isLoggedIn={true} />
      <Header />
      <ToDoList />
      <ColorPicker />
      <MyComponent3 />
      <Counter />
      {/* ternary conditional */}
      {fruits.length > 0 ? <List items={fruits} category='Fruits' /> : null}
      {/* shorthand conditional */}
      {vegetables.length > 0 && <List items={vegetables} category='Vegetables' />}
      <Card />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <ProfilePicture />
      <Button />
      <Footer />
    </>
  );
}

export default App;
