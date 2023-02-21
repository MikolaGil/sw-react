export default class SWapiservice{
    _apiBase = 'https://swapi.dev/api';
  
    async getResource(url){
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error('Could not fetch')
      } else {
        const body = await res.json();
    
        return body;
      }
    }
  
    async getAllPeople(){
      const peoples = await this.getResource(`/people/`);
      return peoples.results.map(this._tranformPerson);
    }
  
    async getPerson(id){
      const person = await this.getResource(`/people/${id}`);

      return this._tranformPerson(person);
    }
    
    getAllPlanets(){
      const planets = this.getResource('/planets/');

      return planets.results.map(this.transformPlanet)
    }
  
    async getPlanet(id){
      const planet = await this.getResource(`/planets/${id}`);
      return this.transformPlanet(planet);
    }
  
    async getAllStarships(){
      const starships = await this.getResource('/starships');
      return starships.results.map(this._transformStarship)
    }
  
    async getStarship(id){
      const starship = await this.getResource(`/starships/${id}`);
      return this._transformStarship(starship);
    }

    transformPlanet(data){
      return {
          id: this.extractId(data, "url"),
          name: data.name,
          population: data.population,
          rotationPeriod: data.rotation_period,
          diameter: data.diameter
      }
    }

    _transformStarship(starship){
      return{
        id: this.extractId(starship, "url"),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      }
    }

    _tranformPerson(person){
      return{
        id: this.extractId(person, "url"),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      }
    }

    extractId(item, prop){
      const regEx = /\/([0-9]{1,})\/$/;
      const id = item[prop].match(regEx)[1];
      return id;
    }
  }