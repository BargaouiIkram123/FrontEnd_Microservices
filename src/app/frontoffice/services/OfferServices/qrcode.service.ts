import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QrCode } from 'src/app/models/OfferModule/qrcode.module';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private baseUrl = '  http://localhost:8082/api/offers/ajouterQR'; // Change this to match your API endpoint
  private baseUrl1 = '  http://localhost:8082/api/offers/qr'; 

  constructor(private http: HttpClient) { }

  createQRCode(link: string): Observable<QrCode> {
    return this.http.post<QrCode>(`${this.baseUrl}`, link);
  }

  getQRCodeImage(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl1}/${id}`, { responseType: 'blob' });
  }
}
