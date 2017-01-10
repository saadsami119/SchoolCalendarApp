import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'toast',
    templateUrl: 'toast.component.html'
})
export default class ToastComponent {
    isHidden: boolean = false;
    cssClass: string = "";

    @Input() type: string;
    @Input() message: string;
    @Input() caption: string;
    @Input() set show(value: boolean) {
        if (!value) {
            this.isHidden = false;
            return;
        }
        this.isHidden = true;
        switch (this.type) {
            case "error":
                {
                    this.cssClass = "alert alert-danger";
                    break;
                }
            case "info":
                {
                    this.cssClass = "alert alert-info";
                    break;
                }
            case "success":
                {
                    this.cssClass = "alert alert-success";
                    break;
                }
            default:

        }

        let timer = Observable.timer(5000, 1000)
            .timeInterval()
            .pluck('interval')
            .take(1);
        timer.subscribe(__ => this.isHidden = false);
    }
}