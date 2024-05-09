import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromSession());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<AuthResponse> {
    // Implement login logic (e.g., HTTP request to authenticate user)
  }

  logout(): void {
    // Implement logout logic (e.g., clear user session data)
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  private getUserFromSession(): User | null {
    const userData = sessionStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }

  private saveUserToSession(user: User): void {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }
}