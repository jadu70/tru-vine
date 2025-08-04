import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ServerCommsService } from '../server-comms.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  private serverCommsService = inject(ServerCommsService);
  private destroyRef = inject(DestroyRef);
  error = signal('');

  ngOnInit() {
    const subscription = this.serverCommsService.fetchClientData().subscribe({
      next: (resData) => {
        console.log(resData);
      },
      error: (error) => {
        console.log(error.message);
        // this.error.set("Something went wrong getting the data!");
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
