import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showpublication',
  templateUrl: './showpublication.component.html',
  styleUrls: ['./showpublication.component.scss']
})
export class ShowpublicationComponent {
constructor(private route: ActivatedRoute){
  route.paramMap.subscribe(paramMap =>{
    console.log(paramMap.get('owner'));
    
})
  
}
}
