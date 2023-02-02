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
  
    getAllPeople(){
      return this.getResource(`/people/`);
    }
  
    getPerson(id){
      return this.getResource(`/people/${id}`);
    }
    
    getAllPlanets(){
      return this.getResource('/planets/');
    }
  
    getPlanet(id){
      return this.getResource(`/planets/${id}`)
    }
  
    getAllStarships(){
      return this.getResource('/starships');
    }
  
    getStarship(id){
      return this.getResource(`/starships/${id}`);
    }
  }