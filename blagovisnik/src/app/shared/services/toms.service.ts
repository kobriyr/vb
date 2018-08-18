import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message, Tom} from '../interfaces';
import {Observable} from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class TomsService {
    constructor(private http: HttpClient) {}

    fetch(): Observable<Tom[]> {
       return this.http.get<Tom[]>('/api/toms');
    }

    getAll(): Observable<Tom[]> {
      return this.http.get<Tom[]>('/api/toms/all');
    }

    getById(id: string): Observable<Tom> {
        return this.http.get<Tom>(`/api/toms/${ id }`);
    }

    create(name: string, number: string, year: string, description: string, file?: File): Observable<Tom> {
        const fd = new FormData();

        if (file) {
            fd.append('file', file, file.name);
        }

        fd.append('name', name);
        fd.append('number', number);
        fd.append('year', year);
        fd.append('description', description);

        return this.http.post<Tom>('api/toms', fd);
    }

    update(id: string, name: string, number: string, year: string, description: string, file?: File): Observable<Tom> {
        const fd = new FormData();

        if (file) {
            fd.append('file', file, file.name);
        }

        fd.append('name', name);
        fd.append('number', number);
        fd.append('year', year);
        fd.append('description', description);

        return this.http.put<Tom>(`api/toms/${id}`, fd);
    }

    delete(id: string): Observable<Message> {
        return this.http.delete<Message>(`/api/toms/${id}`);
    }
}
