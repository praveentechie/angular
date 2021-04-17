import { Injectable }     from "@angular/core";
import { HttpClient, HttpErrorResponse }     from '@angular/common/http';
import { catchError }     from 'rxjs/operators';
import { throwError }     from 'rxjs';
import { difference, isEmpty }     from 'lodash';
import { ServiceBase }    from './service.interface';
import { UserModal }      from '../types/UserModal';


@Injectable({
  providedIn: 'root'
})
export class SessionService extends ServiceBase {
  private http: HttpClient;
  private urlMapping: Object;
  private userDetails: UserModal;

  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.urlMapping = {
      authorizeUser: '/jwt-login'
    };
  }

  // ### ts: return promise of type
  async authorizeUser(payload: UserModal): Promise<UserModal> {
    let userDetails = await this.http.post<UserModal>(this.buildBaseURL(this.urlMapping['authorizeUser']), payload)
    .pipe(catchError(this.handleError))
    .toPromise();
    this.userDetails = userDetails;
    return userDetails;
  }

  getUserDetails(): UserModal {
    return this.userDetails;
  }

  isAuthenticated(): boolean {
    return !isEmpty(this.userDetails);
  }

  isAuthorized(permissionList: Array<string>): boolean {
    return difference(permissionList, this.getUserDetails().permissions).length === 0;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}