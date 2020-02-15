import { Injectable } from '@angular/core';

@Injectable({
  // ### angular - service: singleton service - single instance for whole service
  providedIn: 'root'
})
export class StringHelperService {

  constructor() { }

  toUpperCase(input: String): String {
    return (input || '').toUpperCase();
  }
}
