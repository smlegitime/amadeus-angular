import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payee } from './payee-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayeesDaoService {
  baseUrl = 'http://localhost:8000/payees';

  constructor(private client: HttpClient) { }

  getPayeeById(id: string): Observable<Payee> {
    return this.client.get<Payee>(`${this.baseUrl}/${id}`);
  }

  getPayees(): Observable<Payee[]> {
    return this.client.get<Payee[]>(this.baseUrl);
  }
}
