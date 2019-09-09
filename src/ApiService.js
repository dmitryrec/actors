export default class ApiService {
    _baseURL = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._baseURL}${url}`);
      
        return await res.json();
    }
    async getActors(){
       const res = await this.getResource(`/people/`);
       return res.results;
    }
}

// const swapi = new ApiService();

// swapi.getActors().then((people)=>{
//     people.forEach(p => {
//         console.log(p.name);
//     });
// })

