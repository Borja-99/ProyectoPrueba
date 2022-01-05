import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasService } from 'src/app/shared/services/noticias.service';
import { Noticias } from '../../shared/models/backendModels'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  CurrentMonthNews$: Observable<Noticias[]> = new Observable<Noticias[]>();
  AllNews$: Observable<Noticias[]> = new Observable<Noticias[]>();

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.CurrentMonthNews$ = this.noticiasService.getCurrentMonthNews();
  }

}
