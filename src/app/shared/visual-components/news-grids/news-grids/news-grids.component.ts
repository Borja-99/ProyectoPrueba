import { Component, OnInit, Input } from '@angular/core';
import { Noticias } from "../../../models/backendModels";

@Component({
  selector: 'app-news-grids',
  templateUrl: './news-grids.component.html',
  styleUrls: ['./news-grids.component.scss']
})
export class NewsGridsComponent implements OnInit {
  @Input() noticias: Noticias[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}


