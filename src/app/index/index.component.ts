import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
 speed1 :string="0";
 speed2:string="0";
 OnHovenring(){
   this.speed1 = "0.5"
   console.log(this.speed1)

 }
 OnMouseLeave(){
  this.speed1 = "0"
  console.log(this.speed1)

}
OnHovenring2(){
  this.speed2 = "0.5"
}
OnMouseLeave2(){
 this.speed2 = "0"
}
}
