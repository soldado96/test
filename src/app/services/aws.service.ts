import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User} from "../models/user.model"

@Injectable({
    providedIn: 'root'
})

export class AwsRequests{
    public url: string

    constructor(public http: HttpClient){
        this.url = "https://jyyp3k3217.execute-api.us-east-2.amazonaws.com/prod"
    }

    getUsers(): Observable<any>{
        return this.http.get(this.url)
    }

    postUser(u): Observable<User>{
        return this.http.post<User>(this.url, u)
    }

}