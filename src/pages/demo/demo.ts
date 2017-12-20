import { TodoService } from './../../providers/todo-service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, AlertController, ToastController } from 'ionic-angular';
 
@Component({
  selector: 'demo-home',
  templateUrl: 'demo.html'
})
export class DemoPage {
  todos: Observable<any>;
 
  constructor(public navCtrl: NavController, public todoService: TodoService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.loadTodos();
  }
 
  loadTodos() {
    this.todos = this.todoService.getTodos();
  }
 
  addTodo() {
    let prompt = this.alertCtrl.create({
      title: 'Add Todo',
      message: "Enter the text for your new todo",
      inputs: [
        {
          name: 'text',
          placeholder: 'Buy Milk'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todoService.addTodo(data.text).subscribe(data => {
              this.showToast(data.msg);
              this.loadTodos();
            });
          }
        }
      ]
    });
    prompt.present();
  }
 
  removeTodo(id) {
    this.todoService.deleteTodo(id).subscribe(data => {
      this.showToast(data.msg);
      this.loadTodos();
    })
  }
 
  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}