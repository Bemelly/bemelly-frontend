import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../../_services/publication.service';

@Component({
  selector: 'app-showpublication',
  templateUrl: './showpublication.component.html',
  styleUrls: ['./showpublication.component.scss'],
})
export class ShowpublicationComponent implements OnInit {
  publicationInfo: any = {};
  constructor(
    private route: ActivatedRoute,
    private publicationSev: PublicationService
  ) {}

  ngOnInit(): void {
    this.getPublicationInfo();
  }

  getPublicationInfo() {
    this.route.paramMap.subscribe((paramMap) => {
      const idOwner = paramMap.get('owner');

      this.publicationSev.getPublication(12345).subscribe({
        next: (data: any) => {
          this.publicationInfo = data;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    });
  }
}
