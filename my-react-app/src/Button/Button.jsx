import styles from './Button.module.css';

function Button() {

  let count = 0;

  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`)
    } else {
      console.log(`${name} stop clicking me!`)
    }
  }

  return (
    <button className={styles.button} onClick={() => handleClick('Mark')}>Click me 😁</button>
  );
}

export default Button;