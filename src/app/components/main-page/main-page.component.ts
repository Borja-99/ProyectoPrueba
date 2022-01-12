import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { NoticiasService } from 'src/app/shared/services/noticias.service';
import { Noticias, NOTICIERO } from '../../shared/models/backendModels'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

 noticiasnews: Noticias[] = [];

 noticiero = NOTICIERO;
 
 private subscriptions = new Subscription();

  constructor(
   private NoticiasService: NoticiasService
    ) {}


  ngOnInit(): void {
   this.AllNews();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  AllNews(): void {
      this.subscriptions.add(
        this.NoticiasService.getAllNews().subscribe(
          (data) => {
            this.noticiasnews = data;
            console.log(this.noticiasnews);
          },
          (err) => {
            console.log(err);
          }
        )
      ); 
  }
}
