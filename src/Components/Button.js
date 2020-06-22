import React from 'react';
import '../CSS/Button.css'


const calc_button = (props) => {
    if (props.icon){
        if (props.clickHandler)
            return <button name={props.name} onClick={props.clickHandler}>{props.icon}</button>
        else
            return <button name={props.name}>{props.icon}</button>
    }
    else{
        if (props.clickHandler)
            return <button name={props.name} onClick={props.clickHandler}>{props.name}</button>
        else
            return <button name={props.name}>{props.name}</button>
    }
}

export default calc_button;