import styles from './Button.module.css';

function Button() {

  const handleClick = (e) => e.target.textContent = "OUCH! 😫";

  return (
    <button className={styles.button} onDoubleClick={(e) => handleClick(e)}>Click me 😁</button>
  );
}

export default Button;