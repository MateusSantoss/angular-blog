import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {


  constructor() { }
  @Input ()
  smallcardPhoto:string = "";
  @Input()
  smallcardTitle:string = "";
  @Input ()
  id:string = "0"

  ngOnInit(): void {
  }

}
