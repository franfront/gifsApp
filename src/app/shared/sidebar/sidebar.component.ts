import { GifsService } from './../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get history(){
    return this.gifsService.history;
  }

  constructor(private gifsService: GifsService) {
    
  }

  
}
