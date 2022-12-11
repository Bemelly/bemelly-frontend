import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../../_services/publication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-showpublication',
  templateUrl: './showpublication.component.html',
  styleUrls: ['./showpublication.component.scss'],
})
export class ShowpublicationComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  publicationInfo: any = {};
  constructor(
    private route: ActivatedRoute,
    private publicationSev: PublicationService
  ) {}

  ngOnInit(): void {
    this.getPublicationInfo();
  }

  randomStar() {
    let final = '';
    const estrella = '⭐';
    const aleatorio = Math.floor(Math.random() * (6 - 3) + 3);
    for (let i = 0; i < aleatorio; i++) {
      final += estrella;
    }
    return final;
  }
  randomService() {
    return Math.floor(Math.random() * (100000 - 5000) + 5000);
  }

  getPublicationInfo() {
    this.route.paramMap.subscribe((paramMap) => {
      const idOwner = paramMap.get('owner');

      this.publicationSev.getPublication(idOwner).subscribe({
        next: (data: any) => {
          this.publicationInfo = data;
          console.log(data);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    });
  }
}
