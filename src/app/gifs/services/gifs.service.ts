import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //servicio unico y global en el root
})
export class GifsService {
  private apiKey = 'F9g6ajuVyvksbMuzTzPhB7hN02oWCmKh';

  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient){

  }


  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query); //sino está agregar
      this._history = this._history.splice(0, 10); // limita a 10
    }
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=F9g6ajuVyvksbMuzTzPhB7hN02oWCmKh&q=one piece&limit=15')
        .subscribe((resp: any) =>{
          console.log(resp.data)
        })


  }
}
