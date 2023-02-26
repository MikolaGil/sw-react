import { Component } from "react";
import icon from "./error_icon.png";
import './error-indicator.css';

const ErrorIndicator = ()=>{
    return  <div className="error-indicator">
        <img src={icon} alt="Error"/>
        <span className="boom">Boom! </span>
        <span>
            Something went wrong
        </span>
    </div>
}

export default ErrorIndicator;
