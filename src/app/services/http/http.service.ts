import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../../core/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get('https://pokeapi.co/api/v2/');
  }

  getSelectedResource(resource: Resource) {
    return this.http.get(resource.url);
  }
}
