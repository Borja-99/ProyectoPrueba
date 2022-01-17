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
  num: number;
  numero: number[] = [];

  private subscriptions = new Subscription();
 
  constructor(
   private NoticiasService: NoticiasService
  ) {}

  ngOnInit(): void {
    this.AllNews();
  }

  ngOnDestroy(): void {
  }

  AllNews(): void{
    this.subscriptions.add(
      this.NoticiasService.getAllNews().subscribe(
        (data) => {
          this.noticiasnews = data;
          this.num = data.length;
          for(let i=0; i<this.num; i++){
            this.numero[i] = i;
          }
          console.log(this.noticiasnews);
          console.log(this.num);
          console.log(this.numero);
        },
        (err) => {
          console.log(err);
        }
      )
    )
  }

}
