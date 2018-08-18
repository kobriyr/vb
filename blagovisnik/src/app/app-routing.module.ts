import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {AuthGuard} from './shared/classes/auth.guard';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {EditorialBoardPageComponent} from './editorial-board-page/editorial-board-page.component';
import {ForAuthorsPageComponent} from './for-authors-page/for-authors-page.component';
import {JournalNumbersPageComponent} from './journal-numbers-page/journal-numbers-page.component';
import {ReviewingPageComponent} from './reviewing-page/reviewing-page.component';
import {EnMainLayoutComponent} from './shared/layouts/en-main-layout/en-main-layout.component';
import {EnAboutPageComponent} from './en-about-page/en-about-page.component';
import {EnEditorialBoardPageComponent} from './en-editorial-board-page/en-editorial-board-page.component';
import {EnForAuthorsPageComponent} from './en-for-authors-page/en-for-authors-page.component';
import {EnJournalNumbersPageComponent} from './en-journal-numbers-page/en-journal-numbers-page.component';
import {EnReviewingPageComponent} from './en-reviewing-page/en-reviewing-page.component';
import {EnMainPageComponent} from './en-main-page/en-main-page.component';
import { TomPageComponent } from './tom-page/tom-page.component';
import { FormTomPageComponent } from './tom-page/form-tom-page/form-tom-page.component';
import { ShowTomPageComponent } from './tom-page/show-tom-page/show-tom-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { AboutArticlePageComponent } from './about-article-page/about-article-page.component';

const routes: Routes = [
    { path: 'login', component: AuthLayoutComponent, children: [
            { path: '', component: LoginPageComponent }
        ]},
    { path: 'admin', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
            { path: '', component: TomPageComponent },
            { path: 'tom/create', component: FormTomPageComponent },
            { path: 'tom/edit/:id', component: FormTomPageComponent },
            { path: 'tom/:id', component: ShowTomPageComponent },
            { path: 'tom/:tom/article/create', component: ArticlePageComponent },
            { path: 'tom/:tom/article/:id', component: ArticlePageComponent }
        ]
    },
    { path: '', component: MainLayoutComponent, children: [
            {path: 'about', component: AboutPageComponent},
            {path: 'editorial-board', component: EditorialBoardPageComponent},
            {path: 'for-authors', component: ForAuthorsPageComponent},
            {path: 'journal-numbers', component: JournalNumbersPageComponent},
            {path: 'reviewing', component: ReviewingPageComponent},
            {path: '', component: MainPageComponent},
            {path: ':id', component: AboutArticlePageComponent}
        ]},
    { path: 'en', component: EnMainLayoutComponent, children: [
            {path: 'about', component: EnAboutPageComponent},
            {path: 'editorial-board', component: EnEditorialBoardPageComponent},
            {path: 'for-authors', component: EnForAuthorsPageComponent},
            {path: 'journal-numbers', component: EnJournalNumbersPageComponent},
            {path: 'reviewing', component: EnReviewingPageComponent},
            {path: '', component: EnMainPageComponent}
        ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
