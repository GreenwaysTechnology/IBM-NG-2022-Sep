import { Component, OnInit } from '@angular/core';
import { NumbersService } from './numbers.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor(private numberService:NumbersService) { }

  ngOnInit(): void {
    this.numberService.doubleIt().subscribe({
      next: num => {
        console.log(num)
      },
      complete: function () {
        console.log('stream is completed')
      }
    })
  }

}
