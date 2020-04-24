import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(private userService: UserService) {}
  userActivated =false;
  private activatedSub : Subscription;
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmiiter.subscribe((didActivate)=>{
      this.userActivated = didActivate;
    })
  }

  ngOnDestroy(){
    this.activatedSub.unsubscribe();
  }
}
