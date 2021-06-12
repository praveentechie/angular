import { Component } from "@angular/core";
import ToastService from "@apcore/components/toast/toast.service";
import { Toast, ToastType } from "@apcore/modal/Toast";

@Component({
  templateUrl: './toast-demo.component.html',
  styleUrls: [
    './toast-demo.component.scss'
  ]
})
class ToastDemo {
  message: string = '';
  toastType: ToastType = ToastType.SUCCESS;
  autoDelete: boolean;

  // ### ts: declare and inject value for a class memeber
  constructor(private toastService: ToastService) {}

  showToast() {
    let toastFn = null;
    switch(this.toastType) {
      case ToastType.ERROR:
        toastFn = this.toastService.error
        break;
      case ToastType.INFO:
        toastFn = this.toastService.info
        break;
      case ToastType.SUCCESS:
        toastFn = this.toastService.success
        break;
      case ToastType.WARNING:
        toastFn = this.toastService.warning
        break;
      default:
        toastFn = this.toastService.success
    }

    console.log(this.message);
    let toastMessage = new Toast(this.message, this.autoDelete);
    toastFn.call(null, toastMessage);
  }
}

export default ToastDemo;