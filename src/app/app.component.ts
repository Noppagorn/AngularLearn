import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  isLoading = true;

  todoList: number[] = [];
  test1: number = 10;
  imageURL = "https://imagelogo.co.th/wp-content/uploads/2018/07/slide-image-flex-graphic-03.png"
  isActive = true;
  amount = 123456.7890
  isText = ""
  today = new Date()
  email: string;
  user = {
    name: "John Snow",
    age: 20,
    isAdmin: false,
  };
  constructor( private todoService: TodoService)
    {
      this.todoList = this.todoService.getTodoList();
      this.test1 = 100
    }
    onClickButton(event){
      console.log(event);
      this.isActive = !this.isActive;
    }
    showisText(){

    }

    search(x){
      console.log(x);
      this.isText = x
    }
}
