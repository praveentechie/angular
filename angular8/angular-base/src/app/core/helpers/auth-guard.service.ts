import { Injectable }       from "@angular/core";
import { CanLoad, Route, Router }   from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {
  private sessionService: SessionService;
  private router: Router;

  constructor(router: Router, sessionService: SessionService) {
    this.router = router;
    this.sessionService = sessionService;
  }

  canLoad(route: Route): boolean {
    let isAuthed = this.sessionService.isAuthenticated();
    console.log('isAuthed', isAuthed);
    if (!isAuthed) {
      this.router.navigate(['/login']);
    }
    return isAuthed;
  }
}