import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine,
} from '@ng-doc/app';
import {NG_DOC_ROUTING, provideNgDocContext} from '@ng-doc/generated';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
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
  ],
  providers: [
    provideNgDocApp({
      defaultThemeId: 'auto'
    }),
    provideNgDocContext(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
