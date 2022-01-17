import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { NoticiasService } from 'src/app/shared/services/noticias.service';
import { Noticias} from '../../shared/models/backendModels';
@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit, OnDestroy {

  tipos: string[] = ['Todas', 'Fiesta', 'Policia', 'Empresa', 'Politica'];
  tip: string = "";
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

  sortNewsFiesta(): void{
    this.subscriptions.add(
      this.NoticiasService.sortTypeFiesta().subscribe(
        (data) => {
          this.noticiasnews = data;
        },
        (err) => {
          console.log(err);
        }
      )
    )
  }

  sortNewsPolicia(): void{
    this.subscriptions.add(
      this.NoticiasService.sortTypePolicia().subscribe(
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

  sortNewsPolitica(): void{
    this.subscriptions.add(
      this.NoticiasService.sortTypePolitica().subscribe(
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

  sortNewsCompañia(): void{

    this.subscriptions.add(
      this.NoticiasService.sortTypeCompañia().subscribe(
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

  onClick(tipo): void{
    this.tip = tipo;
    switch(this.tip){
      case 'Todas':
        return this.AllNews();
      case 'Fiesta':
        return this.sortNewsFiesta();
      case 'Policia':
        return this.sortNewsPolicia();
      case 'Politica': 
       return this.sortNewsPolitica();
      case 'Empresa': 
        return this.sortNewsCompañia();
    }
  }
  
}
