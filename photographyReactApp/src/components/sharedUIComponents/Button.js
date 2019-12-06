import React from 'react';
import Styles from './Button.module.css';
import { Link } from 'react-router-dom';

function Button(props) {
    return(
        <Link to={props.destination}>
            <button type="button" className={"text-center btn btn-lg btn-light " + Styles.buttonStyle}>{props.text}</button>
        </Link>
    );
}

export default Button;