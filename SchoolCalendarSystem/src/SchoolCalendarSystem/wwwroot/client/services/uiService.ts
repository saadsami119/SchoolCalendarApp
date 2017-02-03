import { Injectable} from "@angular/core";
import Toast from "../models/toast.model";


@Injectable()
export default class UiService {
    constructor() {
    }

    getErrorToast(msg: string) : Toast {
        let toast = new Toast();
            toast.caption = "Error! ";
            toast.message = msg;
            toast.type = "error";   
            return toast;     
    }    
}
