import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private Http:HttpClient){}
  getTodoData(){
    return this.Http.get('https://jsonplaceholder.typicode.com/todos/')
    
  }
}
