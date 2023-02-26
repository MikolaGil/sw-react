import { Component, Fragment } from "react";
import SWapiservice from "../../swapi-service";
import Spinner from "../spinner/spinner";
import './random-planet.css';
import ErrorIndicator from "../error-indicator/error-indicator";
export default class RandomPlanet extends Component{
    sw = new SWapiservice();

    constructor(){
        super();
        this.updatePlanet();
    }
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
        loading: true,
        error: false
    }

    onPlanetLoaded = (data) => {
        data.loading = false;
        this.setState(data);
    }

    onError = (err) =>{
        this.setState({error: true, loading: false});
    }

    updatePlanet(){
        const id = Math.floor(Math.random() * 15) + 1;
        this.sw.getPlanet(id)
            .then((data) => this.onPlanetLoaded(data))
            .catch(this.onError)
    }

    render(){
        const {loading, error} = this.state;
        const errMsg = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <PlanetView planet={this.state}/> : null;

        return(
            <div className="random-planet jumbotron rounded">
                {errMsg}
                {spinner}
                {content}
            </div>
        );
    }
}


const PlanetView = ({planet})=>{
    const {id, name, population, rotationPeriod, diameter} = planet;

    return <Fragment>
        <img className="planet-image" alt="Planet"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
    </Fragment>
}