import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }

  search(){
    const value = this.txtSearch.nativeElement.value;
    
    if(value.trim().length === 0){
      return;
    }

    this.gifsService.searchGifs(value)

    this.txtSearch.nativeElement.value = '';
  }
  

}
