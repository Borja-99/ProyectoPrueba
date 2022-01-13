import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { NoticiasService } from 'src/app/shared/services/noticias.service';
import { Noticias} from '../../shared/models/backendModels'

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit, OnDestroy {

  noticiasnews: Noticias[] = [];
  noticiasnews2: Noticias[] = [];
  num: number;
  numero: number[] = [];
  nombres: string[] =[];
  fecha: Date[] = [];
  currentDate = new Date();
  click: number = 0;

  private subscriptions = new Subscription();

  constructor(private NoticiasService: NoticiasService) { }

  

  ngOnInit(): void {
    this.AllNews();
   
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  AllNews(): void {
    this.ngOnDestroy;
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
    ); 
  }

  onClick(): void{
    if (this.click == 0 || this.click%2 == 0 ){
      this.click ++;
      return this.sortNewsClick();
    }else {this.click ++;
      return this.AllNews();
    }
  }

  sortNewsClick(): void{
    this.ngOnDestroy;
    this.subscriptions.add(
      this.NoticiasService.sortAllNews().subscribe(
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
