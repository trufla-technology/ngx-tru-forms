import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastebinService {
  url = 'https://pastebin.com/api/api_post.php';
  apiKey = 'f88760091940bc46c7f73dd4ea23395b';

  constructor(
    private http: HttpClient
  ) { }

  postSchema(schema) {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   }),
    //   observe: 'body',
    //   responseType: 'text'
    // };

    const formData = new FormData();
    formData.append('api_dev_key', this.apiKey);
    formData.append('api_option', 'paste');
    formData.append('api_paste_code', schema);

    return this.http.post(this.url, formData, {responseType: 'text'});
  }

  getSchema(pasteId) {
    return this.http.get(`https://pastebin.com/raw/${pasteId}`)
  }
}
