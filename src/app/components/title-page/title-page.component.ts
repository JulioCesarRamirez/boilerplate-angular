import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  title:string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.getData();
  }
  getData() :string{
    let data: string;
    this.route.data.subscribe(
      res => {
        data = res.title;
      },
      err => {
          console.log('No data', err);
      });
    return data;
  }
}
