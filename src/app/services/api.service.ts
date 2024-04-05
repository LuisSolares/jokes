import { HttpClient } from '@angular/common/http';
import { jokesInterface } from '../interfaces/jokes.interface';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { JokesMapper } from '../data/mapper/jokes.mapper';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService{

    private readonly jokesMapper: JokesMapper = new JokesMapper();

    constructor(
        private readonly httpModule: HttpClient
    ){}

    _get() : Observable<jokesInterface[]>{
        return this.httpModule.get<jokesInterface[]>(`${environment.BASE_URL}jokes/random`);
    }

}