import '../assets/styles/Button.css';

function Button(props) {

    const operations = ["+", "-", "*", "/"];
    const isOperation = value => operations.includes(value);

    return (
        <button 
            className={(isOperation(props.children)) ? "button-operation" : "button-digit"}
            onClick={() => props.eventHandler(props.children)}>
            {props.children}
        </button>
    );
}

export default Button;