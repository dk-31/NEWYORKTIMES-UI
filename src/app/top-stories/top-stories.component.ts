import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  newsArray: any;
  numberOfArticles: any;
  newsData: any;

  constructor(private serice: CommonServiceService) { }

  ngOnInit(): void {
    this.getStoriesData()
  }
  getStoriesData() {
    this.serice.getStories().subscribe(resp => {
      console.log(resp);
      this.newsData = resp;
      console.log('getting value ---' + this.newsData.results[0].abstract);
      if (Array.isArray(this.newsData.results)) { }
      this.numberOfArticles = this.newsData.num_results;
      this.newsArray = this.newsData.results;

    })
  }

}
