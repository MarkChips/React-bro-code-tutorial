/**
 * Inline styling. 
 * Prevents global conflicts because it is not reliant on classes. Great for isolated components with minimal styling.
 * Less maintainable, not good for responsive styling.
 */
function Button2() {
    
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (
      <button style={styles}>Click me</button>  
    );
}