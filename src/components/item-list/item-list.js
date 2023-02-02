import { Component } from "react";
import "./item-list.css";

export default class ItemList extends Component{
    render(){
        return <ul className="item-list list-group">
        <li className="list-group-item">1</li>
        <li className="list-group-item">2</li>
        <li className="list-group-item">3</li>
    </ul>
    }
        
}
