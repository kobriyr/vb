import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message, Article } from '../interfaces';
import {Observable} from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class ArticleService {
    constructor(private http: HttpClient) {}

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  getById(id: string): Observable<Article> {
    return this.http.get<Article>(`/api/articles/${ id }`);
  }

  // @ts-ignore
  create(tom: string, author?: string, number: string, title: string, pages?: string, key_words?: string, summary?: string,
         summary_en?: string, file?: File): Observable<Article> {
    const fd = new FormData();

    if (author) {
      fd.append('author', author);
    }

    if (pages) {
      fd.append('pages', pages);
    }

    if (key_words) {
      fd.append('key_words', key_words);
    }

    if (summary) {
      fd.append('summary', summary);
    }

    if (summary_en) {
      fd.append('summary_en', summary_en);
    }

    if (file) {
      fd.append('file', file, file.name);
    }

    fd.append('tom', tom);
    fd.append('number', number);
    fd.append('title', title);

    return this.http.post<Article>('api/articles', fd);
  }

  // @ts-ignore
  update(id: string, author?: string, number: string, title: string, pages?: string, key_words?: string, summary?: string,
         summary_en?: string, file?: File): Observable<Article> {
    const fd = new FormData();

    if (author) {
      fd.append('author', author);
    }

    if (pages) {
      fd.append('pages', pages);
    }

    if (key_words) {
      fd.append('key_words', key_words);
    }

    if (summary) {
      fd.append('summary', summary);
    }

    if (summary_en) {
      fd.append('summary_en', summary_en);
    }

    if (file) {
      fd.append('file', file, file.name);
    }

    fd.append('number', number);
    fd.append('title', title);

    return this.http.put<Article>(`api/articles/${id}`, fd);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/articles/${id}`);
  }
}
