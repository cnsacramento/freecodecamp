import '../assets/styles/Screen.css'


const Screen = ({ input }) => (
    <input type="text" value={input} onChange={() => input}/>
);

export default Screen;