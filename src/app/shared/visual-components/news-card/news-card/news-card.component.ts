import { Component, Input, OnInit } from '@angular/core';
import { Noticias, NOTICIERO } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() noticia: Noticias;
  noticiero = NOTICIERO;

  constructor() {}

  ngOnInit(): void {
  }

}
