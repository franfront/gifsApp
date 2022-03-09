import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from './../interface/gifs.interface';

@Injectable({
  providedIn: 'root', //servicio unico y global en el root
})
export class GifsService {
  private apiKey = 'F9g6ajuVyvksbMuzTzPhB7hN02oWCmKh';

  private serviceUrl = 'https://api.giphy.com/v1/gifs'

  private _history: string[] = [];

  public results: Gif[] = []

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient){

    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];


  }


  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query); //sino está agregar
      this._history = this._history.splice(0, 12); // limita a 15

      localStorage.setItem('history', JSON.stringify(this._history))

    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', query);
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
        .subscribe(resp =>{
          this.results = resp.data
          localStorage.setItem('results', JSON.stringify(this.results))
        })


  }
}
