import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'zone.js';  

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports); // 🔹 Configure Amplify here

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
