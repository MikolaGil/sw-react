import { Component } from "react";
import "./item-list.css";
import SWapiservice from "../../swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component{
    sw = new SWapiservice();

    state = {
        peopleList: null
    }

    componentDidMount =() =>{
        this.sw.getAllPeople()
        .then(peopleList => {
            
            this.setState({peopleList})
        });
    }

    renderItem(arr) {
        return arr.map(({id, name}) =>{
            return <li className="list-group-item" key={id}
                onClick={()=> this.props.onItemSelected(id)}>
                {name}
            </li>
        });
    }

    render(){
        const {peopleList} = this.state;

        if(!peopleList){
            return <Spinner/>;
        }
        
        return <ul className="item-list list-group">
            {this.renderItem(peopleList)}
        </ul>
    }
        
}
