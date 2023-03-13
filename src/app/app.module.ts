import { NgDocModule, NG_DOC_DARK_PURPLE_THEME } from '@ng-doc/app';
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
    RouterModule.forRoot([
      { path: '', redirectTo: 'docs/button', pathMatch: 'full' },
      ...NG_DOC_ROUTING,
    ]),
    NgDocModule.forRoot({ defaultThemeId: NG_DOC_DARK_PURPLE_THEME.id }),
    NgDocGeneratedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
