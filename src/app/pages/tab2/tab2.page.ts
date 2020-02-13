import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

 @ViewChild(IonSegment,{static: false}) segment : IonSegment;
  categorias = ['business','entertainment','general', 'health','science','sports','technology']
  noticias: Article[]=[]

  constructor(private newServ:NoticiasService) {}

  ngOnInit(){
   this.segment.value=this.categorias[0]
   this.cargarNoticias(this.categorias[0])    
  }    
  
  
    cambiodeCategoria(event) {
      this.noticias = []
      this.cargarNoticias(event.detail.value)
    console.log(event.detail.value)   
    } 


    cargarNoticias(categoria:string){
      this.newServ.getTopHeadlinesCategorias(categoria)
                 .subscribe(resp=>{
                   console.log(resp)
                   this.noticias.push(...resp.articles)
                 })

  }
}
