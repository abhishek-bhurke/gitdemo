import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

createUser(users:any){
  return this._http.post("http://localhost:3000/registration",users);
}
retrieveUser()
{
  return this._http.get("http://localhost:3000/registration");
}
deleteUser(allusers:any)
{
  return this._http.delete("http://localhost:3000/registration/"+allusers.id);
}
updateUser(allusers:any){
  return this._http.put("http://localhost:3000/registration/"+allusers.id,allusers);
}
}