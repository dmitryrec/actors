export default class ApiService {
    _baseURL = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._baseURL}${url}`);

        if(!res.ok) {
            throw new Error(`not fetch ${url} , received ${res.status}`)
        }
        return await res.json();
    }
    async getActors(){
       const res = await this.getResource(`/people/`);
       return res.results;
    }
}



