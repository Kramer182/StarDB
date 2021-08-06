class SwapiService {
  _apiBase = 'http://apxuapi.herokuapp.com/api'
  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url }`);
  
    if (!res.ok) {
      throw new Error(`could not fetch ${url} , received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people`);
    return res.results;
  }
  
  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }

  async getAllPlanet() {
    const res = await this.getResource(`/planets`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`)
  }
};



const swapi = new SwapiService();
swapi.getAllPeople().then((people)=>{
  people.forEach((p) => {
    console.log(p.name)
  
  });
})
swapi.getPlanet(3).then((p)=>{
  console.log(p.name)
})