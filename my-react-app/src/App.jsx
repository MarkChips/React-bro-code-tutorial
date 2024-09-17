import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';

function App() {
  
  return (
    <>
      <Header />
      <Card />
      <Student name='Spongebob' age={30} isStudent={true} />
      <Student name='Patrick' age={42} isStudent={false} />
      <Student name='Squidward' age={50} isStudent={false} />
      <Student name='Sandy' age={27} isStudent={true} />
      <Student />
      <Button />
      <Footer />
    </>
  );
}

export default App
