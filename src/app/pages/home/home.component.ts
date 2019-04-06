import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: string[] = ['https://picsum.photos/1119/600/?random', 'https://picsum.photos/1119/600/?random1', 'https://picsum.photos/1119/600/?random2', 'https://picsum.photos/1119/600/?random3']
  constructor() { }

  ngOnInit() {
  }

}
