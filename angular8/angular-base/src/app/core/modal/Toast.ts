export enum ToastType {
  ERROR = 'Error',
  INFO = 'Info',
  SUCCESS = 'Success',
  WARNING = 'Warning'
}

export class Toast {
  id?: string;
  title?: string;
  type: ToastType = ToastType.INFO;
  description: string;
  autoDelete?: boolean;

  constructor(description: string, autoDelete?: boolean) {
    this.description = description;
    if (autoDelete !== undefined) {
      this.autoDelete = autoDelete;
    }
  }
}
