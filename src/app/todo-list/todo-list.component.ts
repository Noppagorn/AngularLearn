import { Component, OnInit } from '@angular/core';

///function log(target,name,descriptor){
//  console.log(target,name,descriptor)
//}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
