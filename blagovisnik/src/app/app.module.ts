import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import {TokenInterceptor} from './shared/classes/token.interceptor';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditorialBoardPageComponent } from './editorial-board-page/editorial-board-page.component';
import { ForAuthorsPageComponent } from './for-authors-page/for-authors-page.component';
import { JournalNumbersPageComponent } from './journal-numbers-page/journal-numbers-page.component';
import { ReviewingPageComponent } from './reviewing-page/reviewing-page.component';
import { EnMainLayoutComponent } from './shared/layouts/en-main-layout/en-main-layout.component';
import { EnAboutPageComponent } from './en-about-page/en-about-page.component';
import { EnEditorialBoardPageComponent } from './en-editorial-board-page/en-editorial-board-page.component';
import { EnForAuthorsPageComponent } from './en-for-authors-page/en-for-authors-page.component';
import { EnJournalNumbersPageComponent } from './en-journal-numbers-page/en-journal-numbers-page.component';
import { EnReviewingPageComponent } from './en-reviewing-page/en-reviewing-page.component';
import { EnMainPageComponent } from './en-main-page/en-main-page.component';
import { TomPageComponent } from './tom-page/tom-page.component';
import { FormTomPageComponent } from './tom-page/form-tom-page/form-tom-page.component';
import { ShowTomPageComponent } from './tom-page/show-tom-page/show-tom-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SearchPipe } from './search.pipe';
import { AboutArticlePageComponent } from './about-article-page/about-article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    AboutPageComponent,
    MainLayoutComponent,
    MainPageComponent,
    EditorialBoardPageComponent,
    ForAuthorsPageComponent,
    JournalNumbersPageComponent,
    ReviewingPageComponent,
    EnMainLayoutComponent,
    EnAboutPageComponent,
    EnEditorialBoardPageComponent,
    EnForAuthorsPageComponent,
    EnJournalNumbersPageComponent,
    EnReviewingPageComponent,
    EnMainPageComponent,
    TomPageComponent,
    FormTomPageComponent,
    ShowTomPageComponent,
    ArticlePageComponent,
    SearchPipe,
    AboutArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }