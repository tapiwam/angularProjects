import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'e4a0dbfbbb9e32981c8c';
    private client_secret = '34f9d4160813d409063de5e6d2dd64065a01b4f1';

    constructor (private _http: Http){
        console.log('Github service ready...');
        this.username = 'tapiwam';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username
            + '?client_id' + this. client_id + '&client_secret' + this.client_secret) 
            .map(res => res.json());

    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos'
            + '?client_id' + this. client_id + '&client_secret' + this.client_secret) 
            .map(res => res.json());

    }

    updateUser(username:string){
        this.username = username;
    }
}