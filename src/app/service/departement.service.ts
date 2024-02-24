import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { departement } from '../Model/departement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
  AddDep(data:any){
  return this.http.post("http://localhost:3000/departement",data)
  }

  FetchDep(){
    return this.http.get("http://localhost:3000/departement")
    }
    Update(data: any, id: any) {
      return this.http.put("http://localhost:3000/departement/" + id, data);
    }

    FindDepById(id:any)
    {
      return this.http.get("http://localhost:3000/departement/" + id);
        }
        Delete(id: any): Observable<any> {
          return this.http.delete("http://localhost:3000/departement/" + id);
        }
}
