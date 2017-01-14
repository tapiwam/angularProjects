import { Component } from '@angular/core';
import { GithubService } from './services/github.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [ GithubService ],
  templateUrl: 'app.component.html',
})
export class AppComponent  { name = 'Angular'; }
