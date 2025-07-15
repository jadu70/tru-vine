import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
// import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
// username: string = '';

//   async ngOnInit() {
//     try {
//       const user = await Auth.currentAuthenticatedUser();
//       this.username = user.username;
//     } catch (err) {
//       console.error('User not signed in', err);
//     }
//   }

//   async signOut() {
//     await Auth.signOut();
//     window.location.reload();
//   }
}
