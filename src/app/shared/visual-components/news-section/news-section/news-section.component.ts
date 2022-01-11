import { Component, Input, OnInit } from '@angular/core';
import { Noticias } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {

  @Input() noticias: Noticias[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
