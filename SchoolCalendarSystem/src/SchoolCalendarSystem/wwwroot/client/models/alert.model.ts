export default class Alert {
    caption: string;
    message: string;
    type: string;
    id: number;

    constructor(msg: string, type: string , cpt : string) {
        this.caption = cpt;
        this.message = msg;
        this.type = this.getAlertType(type);
        console.log(this.type);
        this.id = Math.floor((Math.random() * 6) + 1);

    }

    private getAlertType(type: string): string {
        let cssClass: string;

        switch (type) {
            case "error":
                {
                    cssClass = "alert alert-danger";
                    break;
                }
            case "info":
                {
                    cssClass = "alert alert-info";
                    break;
                }
            case "success":
                {
                    cssClass = "alert alert-success";
                    break;
                }
            default:
                cssClass = "";
        }

        return cssClass;
    }
}