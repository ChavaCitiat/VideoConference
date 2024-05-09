import { Injectable } from '@angular/core';
import { Discussion } from '../models/discussion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  private apiUrl = '';

  constructor(private http: HttpClient) 
  { 
   }


  public getDiscussionDetails(discussionId : number)  {

    return this.http.get<Discussion>(`${this.apiUrl}/discussion/${discussionId}`);
    
  }
}
