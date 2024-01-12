import { Component,CUSTOM_ELEMENTS_SCHEMA,OnInit } from '@angular/core';

@Component({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  speed1 =0;
  speed2=0;
   ngOnInit() {
    // Code to execute on component initialization
   this.speed1=0;
   this.speed2=0
  }

 OnHovenring(){
   this.speed1 =0.5
   console.log(this.speed1)

 }
 OnMouseLeave(){
  this.speed1 = 0
  console.log(this.speed1)

}
OnHovenring2(){
  this.speed2 = 0.5
}
OnMouseLeave2(){
 this.speed2 = 0
}
}
