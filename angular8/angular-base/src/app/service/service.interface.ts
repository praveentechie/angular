import { HttpClient } from '@angular/common/http';

// ### ts: abstract class
export abstract class ServiceBase {
  // ### ts: ready only parent properties
  // server host
  readonly serverHost: String;
  readonly serverProtocol: String;
  readonly serverPort: Number;

  constructor() {
    this.serverHost = 'localhost';
    this.serverProtocol = 'https';
    this.serverPort = 4040;
  }

  buildBaseURL(resourcePath: String) {
    return `${this.serverProtocol}://${this.serverHost}:${this.serverPort}${resourcePath}`;
  }
}