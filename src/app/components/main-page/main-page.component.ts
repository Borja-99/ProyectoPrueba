import { Component, Input, OnDestroy, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { NoticiasService } from 'src/app/shared/services/noticias.service';
import { Noticias} from '../../shared/models/backendModels'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  noticiasnews: Noticias[] = [];
  noticiasnews2: Noticias[] = [];
  num: number;
  numero: number[] = [];
  nombres: string[] =[];
  fecha: Date[] = [];
  currentDate = new Date();
  click: number = 0;

  private subscriptions = new Subscription();
 
  constructor(
   private NoticiasService: NoticiasService
    ) {}


  ngOnInit(): void {
    this.monthNews();
  }

  ngOnDestroy(): void {
  }

  monthNews(): void{
    this.subscriptions.add(
      this.NoticiasService.sortCurrentMonthNews().subscribe(
        (data) => {
          this.noticiasnews = data;
          this.num = data.length;
          for(let i=0; i<this.num; i++){
            this.numero[i] = i;
            //this.fecha[i] = this.noticiasnews[{'date'}];
          }
          for(let i = 0; i<this.fecha.length; i++) {
            if(this.currentDate.getMonth() == 7){
              // Si el mes de la noticia es el actual, entonces añadirlo a noticiasnews2, cogiendolo de noticiasnews por su id para mostrarlo por pantalla posteriormente
            }
          }
          console.log(this.noticiasnews);
          console.log(this.num);
          console.log(this.numero);
          console.log(this.noticiasnews2);
        },
        (err) => {
          console.log(err);
        }
      )
    )
  }

 
}
