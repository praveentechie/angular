import { Injectable } from "@angular/core";
import { StringHelperService } from "@apcore/helpers/string-helper.service";
import { Toast, ToastType } from "@apcore/modal/Toast";
import { Observable, of } from "rxjs";

// ### angular @Injectable - to use injectable service add it to the constructor of where you wanna use it.
@Injectable({
  providedIn: 'root'
})
class ToastService {
  // ### ts static const member
  static readonly TOAST_REMOVE_TIME: number = 5000;

  toastListObs: Observable<Toast[]>;
  toastList: Array<Toast>;

  constructor(private stringUtils: StringHelperService) {
    this.toastList = [];
    this.toastListObs = of(this.toastList);
  }

  _showToast(toast: Toast) {
    toast.id = this.stringUtils.generateRandomId();
    this.toastList.push(toast);
    if (toast.autoDelete) {
      setTimeout(() => {
        this.closeToast(toast.id);
      }, ToastService.TOAST_REMOVE_TIME);
    }
  }

  error = (toast: Toast) => {
    toast.type = ToastType.ERROR;
    this._showToast(toast);
  }

  info = (toast: Toast) => {
    toast.type = ToastType.INFO;
    this._showToast(toast);
  }

  success = (toast: Toast) => {
    toast.type = ToastType.SUCCESS;
    this._showToast(toast);
  }

  warning = (toast: Toast) => {
    toast.type = ToastType.WARNING;
    this._showToast(toast);
  }

  closeToast(id: string) {
    let toastIndex = this.toastList.findIndex(toast => toast.id === id);
    if (toastIndex >= 0) {
      this.toastList.splice(toastIndex, 1);
    }
  }
}

export default ToastService;