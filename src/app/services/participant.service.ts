import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = '';
  private participantsSubject: BehaviorSubject<Participant[]> = new BehaviorSubject<Participant[]>([]);

  constructor(private http: HttpClient) {
    // Load initial participants when the service is instantiated
    this.loadParticipants();
  }

  // Method to get the current value of the participants subject
  get participants$(): Observable<Participant[]> {
    return this.participantsSubject.asObservable();
  }

  // Method to fetch participants from the API and update the behavior subject
  private loadParticipants(): void {
    this.http.get<Participant[]>(`${this.apiUrl}/participants`).subscribe(
      {
        next: (participants) => {
          this.participantsSubject.next(participants);
        },
        error: (error) => {
          console.error('Failed to load participants:', error);
        }
      }
    )
  }

}

