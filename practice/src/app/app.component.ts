import { Component } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {



  
  /*activeUsers = ['Vargas', 'Rachel'];
  inactiveUsers = ['Castro', 'Nicole'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }*/



 /* onNavigate(feature: string) {
    this.loadedFeature = feature;

  }*/

  
 
}
