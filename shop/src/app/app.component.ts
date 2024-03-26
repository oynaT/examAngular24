import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';


  // get isAuthenticating(): boolean {
  //   return this.userService.user === undefined;
  // }

  // constructor(private userService: UserService, private router: Router) {
  //  const token = this.userService.getToken();
  //   if(token){
  //     this.userService.getProfileInfo().subscribe({
  //       error: () => {
  //         this.userService.user = null;
  //       }
  //     })
  //   }
     // this.router.navigate(['/login']);
  // }

}
