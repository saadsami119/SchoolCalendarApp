export class Toast {
    caption: string;
    message: string;
    type: string;
    show: boolean;

    errorToast(msg: string, cpt: string): void {
        this.caption = cpt;
        this.message = msg;
        this.type = "error";
        this.show = true;
    }

    infoToast(msg: string, cpt: string) {
        this.caption = cpt;
        this.message = msg;
        this.type = "info";
        this.show = true;
    }

    successToast(msg: string, cpt: string) {
        this.caption = cpt;
        this.message = msg;
        this.type = "success";
        this.show = true;
    }
}