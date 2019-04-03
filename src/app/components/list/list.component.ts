import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() heroList: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
