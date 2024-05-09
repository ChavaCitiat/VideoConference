import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DiscussionAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private apiService: ApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      const discussionId = route.params.discussionId; // Assuming discussionId is part of the route params
      const participantId = currentUser.id;

      return this.apiService.isInvitedToDiscussion(discussionId, participantId).pipe(
        map((isAllowed) => {
          if (isAllowed) {
            return true; // User is allowed to access the discussion
          } else {
            return this.router.parseUrl('/unauthorized'); // Redirect to unauthorized page or handle accordingly
          }
        })
      );
    } else {
      return this.router.parseUrl('/login'); // Redirect to login page if user is not authenticated
    }
  }
}