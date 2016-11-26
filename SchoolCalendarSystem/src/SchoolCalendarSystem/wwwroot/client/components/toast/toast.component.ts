import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'toast',
    templateUrl: 'toast.component.html'
})
export class ToastComponent {
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
        this.cssClass = this.type === "error" ? "alert alert-danger" : "alert alert-success";
        let timer = Observable.timer(5000, 1000)
            .timeInterval()
            .pluck('interval')
            .take(1);
        timer.subscribe(__ => this.isHidden = false);
    }
}