import React from 'react';
import '../stylesheets/Testimony.css';

function Testimony(props) {
    return (
        <article className="testimony-box">
            <img 
                className="testimony-image"
                src={require(`../images/${props.image}-testimony.png`)}
                alt={props.imageDescription} />
            <div className="testimony-container">
                <p className="testimony-alumni">
                    <strong>{props.name}</strong> in {props.ubication}
                </p>
                <p className="testimony-job">
                    {props.job} at <strong>{props.company}</strong>
                </p>
                <p className="testimony-text">
                    "{props.testimony}"
                </p>
            </div>
        </article>
    );
}

export default Testimony;