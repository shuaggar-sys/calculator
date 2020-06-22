import React from 'react';
import '../CSS/Display.css'


const display = (props) => {
    console.log("Rendering Display")
    const placeHolder = props.text === "" ? "Enter Values Here..." : props.text;
    return <input type="text" placeholder={placeHolder} value={props.text} disabled={true}/>
}

export default display;