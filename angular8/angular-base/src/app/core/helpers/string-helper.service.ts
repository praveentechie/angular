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

  generateRandomId(length?: number) {
    return Array(2).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, length || 10);
  }
}
