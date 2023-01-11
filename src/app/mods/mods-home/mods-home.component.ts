import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  modalOpen = false;

  items: any = [
    {title: "Why is the sky blue?", content: "Because it is"},
    {title: "Why does sky blue?", content: "Because it is"},
    {title: "What color is the sky blue?", content: "Because it is"}
  ]

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
