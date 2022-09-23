import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  id!: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        console.log(params['id'])
        this.id = params['id']
      }
    })
  }

}
