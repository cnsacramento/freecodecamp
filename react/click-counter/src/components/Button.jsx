import '../stylesheets/Button.css';

function Button({ option, isClickButton, eventHandler }) {

    return (
        <button
            className={(isClickButton) ? "click-button" : "reload-button"}
            onClick={eventHandler}
        >
            { option }
        </button>
    );
}

export default Button;