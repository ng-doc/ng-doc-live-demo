import {AppComponent} from './app/app.component';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {bootstrapApplication} from '@angular/platform-browser';
import {NG_DOC_ROUTING, provideNgDocContext} from '@ng-doc/generated';
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine
} from '@ng-doc/app';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter([
      {path: '', redirectTo: 'button', pathMatch: 'full'},
      ...NG_DOC_ROUTING,
    ], withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),),
    // NgDoc providers
    provideNgDocApp({
      defaultThemeId: 'auto'
    }),
    provideNgDocContext(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
  ]
})
  .catch(err => console.error(err));
