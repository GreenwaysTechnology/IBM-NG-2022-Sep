import { Component, OnInit } from '@angular/core';
import { GreeterService } from './greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ]
})
export class GreeterComponent implements OnInit {

  message!: string;
  hai!:string 
  constructor(private greeterService: GreeterService) { }

  ngOnInit(): void {
    this.greeterService.sayHello().subscribe({
      next: message => {
        console.log(message)
        this.message = message
      },
      complete: function () {
        console.log('stream is completed')
      }
    })
    this.greeterService.sayHai().subscribe({
      next: message => {
        console.log(message)
        this.hai = message
      },
      complete: function () {
        console.log('stream is completed')
      }
    })

  }

}
