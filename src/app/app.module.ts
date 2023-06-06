import {
  NG_DOC_NIGHT_THEME,
  NgDocDefaultSearchEngine,
  NgDocModule,
  provideSearchEngine,
} from '@ng-doc/app';
import { NG_DOC_ROUTING, NgDocGeneratedModule } from '@ng-doc/generated';
import { RouterModule } from '@angular/router';
import { NgDocSidebarModule } from '@ng-doc/app/components/sidebar';
import { NgDocNavbarModule } from '@ng-doc/app/components/navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgDocNavbarModule,
    NgDocSidebarModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'button', pathMatch: 'full' },
        ...NG_DOC_ROUTING,
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 70],
      }
    ),
    NgDocModule.forRoot({defaultThemeId: 'auto'}),
    NgDocGeneratedModule.forRoot(),
  ],
  providers: [provideSearchEngine(NgDocDefaultSearchEngine)],
  bootstrap: [AppComponent],
})
export class AppModule {}
