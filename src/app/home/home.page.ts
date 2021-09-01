import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user.model';
import { AwsRequests } from '../services/aws.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: User = {id: this.generateRandomId(), email: '', username: ''}

  public all: any

  constructor(
    private requests: AwsRequests
  ) {}

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this.requests.getUsers().subscribe(
      res => {console.log(res)}, 
      error => {console.log(<any>error)}
    )
  }

  postUser(){
    if(this.user.email != "" && this.user.username != ""){
      this.requests.postUser(JSON.stringify(this.user)).subscribe((res: User)=>{console.log(res)})
    }else{
      error => {console.log(error)}
    }
  }

  getRandomInt(min: number, max: number){
    return Math.floor(Math.random() * (max-min+1) + min)
  }

  generateRandomId(){
    while(this.getRandomInt){
      return this.getRandomInt(0,99999);
    }
  }

}
