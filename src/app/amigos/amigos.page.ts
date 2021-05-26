import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
      amigos:Object[]=[];
  constructor() {
      let amigo ={
        nome :"lucas",
        idade : 17,
        lv_amizade:3
      }
      let amigo2 ={
        nome :"joão",
        idade : 23,
        lv_amizade:2
      }
      let amigo3 ={
        nome :"maria",
        idade : 21,
        lv_amizade:4
      }
      let amigo4 ={
        nome :"fernanada",
        idade : 18,
        lv_amizade:5
      }
      let amigo5 ={
        nome :"marcos",
        idade : 40,
        lv_amizade:1
      }
        this.amigos.push(amigo);
        this.amigos.push(amigo2);
        this.amigos.push(amigo3);
        this.amigos.push(amigo4);
        this.amigos.push(amigo5);
   }

  ngOnInit() {
  }
  deleteAmigo(){
    document.getElementById("")
  }

}
