import { Component} from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  providers:[UserService]
})
export class HomePageComponent  {
  public title:string;
  public identity;

  constructor(private _userService:UserService) { 
    this.title = 'Agrosoft';
  }

  ngOnInit() { 
    this.identity = this._userService.getIdentity();
    console.log(this.identity)
  }

}