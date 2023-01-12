import '../assets/styles/ClearButton.css';

const ClearButton = (props) => (
    <button className="clearButton" onClick={props.eventHandler}>
        {props.children}
    </button>
);


export default ClearButton;