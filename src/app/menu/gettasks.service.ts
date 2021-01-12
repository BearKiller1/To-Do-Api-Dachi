import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GettasksService {
  link = "http://tasksapi.docelove.cf";

  constructor(private Http:HttpClient) { }

  getAll(){
    return this.Http.get(this.link);
  }

  edit(){}

  getById(id:any){
  }
}
