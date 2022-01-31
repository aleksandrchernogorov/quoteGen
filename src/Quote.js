import React from "react";
import './Quote.css';

const Quote = (props) => {

    return (
        <div>
            <h3 id="author" className="f2">{props.name}</h3>
            <p id="text" className="f3">{props.text}</p>
        </div>
    )
}

// Quote.defaultProps = {
//     name
// }

export default Quote;