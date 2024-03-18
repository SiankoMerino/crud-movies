import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MovieResponse } from '../interface/movieResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://unogs-unogs-v1.p.rapidapi.com/search/titles';

  constructor(private http: HttpClient) { }

  async obtenerPeliculas(): Promise<MovieResponse> {
    
    let params = new HttpParams();
    params = params.append('limit', 12);

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '99312522ffmshf33fd196e5a115ap1c187cjsn47bc66417482',
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    });

    const response = this.http.get<MovieResponse>(this.apiUrl, { headers: headers, params: params });
    return await firstValueFrom(response);
  }
}
