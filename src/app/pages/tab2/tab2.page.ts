import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

 @ViewChild(IonSegment,{static: false}) segment : IonSegment;
  categorias = ['business','entertainment','general', 'health','science','sports','technology']

  constructor(private newServ:NoticiasService) {}

  ngOnInit(){


     this.segment.value=this.categorias[0]
     this.newServ.getTopHeadlinesCategorias(this.categorias[0])
                .subscribe(resp=>{
                  console.log(resp)
                })

}
}
