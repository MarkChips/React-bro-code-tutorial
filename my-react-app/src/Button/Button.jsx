import styles from './Button.module.css';

function Button() {

  const handleClick = () => console.log('OUCH!');

  const handleClick2 = (name) => console.log(`${name} stop clicking me`)

  return (
    <button className={styles.button} onClick={() => handleClick2('Mark')}>Click me 😁</button>
  );
}

export default Button;