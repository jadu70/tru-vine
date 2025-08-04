import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import 'zone.js';  

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { provideHttpClient } from '@angular/common/http';

Amplify.configure(awsExports); // 🔹 Configure Amplify here

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));

