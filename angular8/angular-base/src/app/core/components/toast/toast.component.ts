import { Component } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import ToastService from "./toast.service";

@Component({
  selector: 'toast-notification',
  templateUrl: './toast.component.html',
  styleUrls: [
    './toast.component.scss'
  ],
  animations: [
    trigger('slideIn', [
      state('*', style({
        transform: 'translateY(0) scale(1) rotateY(0)',
        opacity: 1,
        filter: 'blur(0) saturate(100%)'
      })),
      state('void', style({
        transform: 'translateY(20px) scale(1.1) rotateY(5deg)',
        opacity: 0,
        filter: 'blur(2px) saturate(50%)'
      })),
      transition('void => *',  animate('.3s ease-in-out')),
    ]),
    trigger('slideOut', [
      state('*', style({
        transform: 'translateX(0)  scale(1)',
        opacity: 1,
      })),
      state('void', style({
        transform: 'translateX(100%) scale(.7)',
        opacity: 0,
      })),
      transition('* => void', animate('.2s ease')),
    ])
  ]
})
class ToastNotification {
  private toastService: ToastService;

  constructor(toastService: ToastService) {
    console.log('toast init');
    this.toastService = toastService;
  }

  closeToast(id: string) {
    this.toastService.closeToast(id);
  }
}

export default ToastNotification;