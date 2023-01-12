import '../stylesheets/Counter.css'

function Counter({ numsOfClicks }) {

    return (
        <div className="counter">{numsOfClicks}</div>
    );
}

export default Counter;