import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPathService {

  public path:String = "http://localhost:8088/espritmobility/";
}
