import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent} from '@ng-doc/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, RouterOutlet]
})
export class AppComponent {}
