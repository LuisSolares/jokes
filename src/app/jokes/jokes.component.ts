
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit{

  @ViewChild('contentBody') private contentBody!: ElementRef;
  jokeList:any = [];
  count:number = 0;
  totalCount = 20;

  constructor(
    private readonly apiService: ApiService
  ){}

  ngOnInit(): void {
    this.callJokes(this.totalCount);
  }

  callJokes(times:number){
      
      this.apiService._get().subscribe((data)=>{
      
        this.jokeList.push(data);
        this.scrollToBottom();
        this.count++;
        
        if(this.count < times)
          this.callJokes(times);
          
      });
  }

  formatDate(date:Date){
    date = new Date(date);
		var monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();

		var ddate = day + ' ' + monthNames[monthIndex] + ' ' + year;

		return (isNaN(day) ? date : ddate);
  }

  scrollToBottom(): void {
    try {
        this.contentBody.nativeElement.scrollTop = this.contentBody.nativeElement.scrollHeight;
    } catch(err) { 
      console.log(err);
    }
  }
}