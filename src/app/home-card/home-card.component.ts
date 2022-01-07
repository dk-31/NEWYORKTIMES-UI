import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {


  constructor(private serice: CommonServiceService) { }

  ngOnInit(): void {
  }
  getStoriesData() {
    this.serice.getStories().subscribe(resp => {
          console.log(resp);
    })
  }
}
