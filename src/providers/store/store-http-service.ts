import { ParamBuilder, HttpService } from "../http-service";
import { Headers, RequestOptions } from '@angular/http';
import { AppController } from '../app-controller'


export class StoreHttpService {

  private SERVICE_URL: string = "http://api.wiads.vn/";

  private CLIENT_KEY: string = "8c24516c23b611420defccf253598412";

  private DEVICE_ID: string = "appinasia_macbookpro";

  private CLIENT_ID: string = "1_4qoctizwwaw4gwc400go84gwksswo04cw040scgog44kw4kcc0";

  private CLIENT_SECRET: string = "490drpedg8u84ckcgg84wok0g8o4ckck88o4gcoc0scsk80o40";

  mHeaderWithKey: Headers;

  isDebug = true;

  constructor(private mHttpService: HttpService) {
  }

  private createHeaders() {
    if (this.mHeaderWithKey == null || this.mHeaderWithKey == undefined) {
      this.mHeaderWithKey = new Headers();
      this.mHeaderWithKey.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');

    }
  }
  requestGet(url: string, params: string) {
    this.createHeaders();
    let options = new RequestOptions({ headers: this.mHeaderWithKey });
    if (this.isDebug) console.log(this.SERVICE_URL + url + params);
    return this.mHttpService.requestGet(url, params, options);
  }

  requestPost(url: string, params: string) {
    this.createHeaders();
    let options = new RequestOptions({ headers: this.mHeaderWithKey });
    if (this.isDebug) console.log(this.SERVICE_URL + url + params);
    return this.mHttpService.requestPost(url, params, { headers: this.mHeaderWithKey });
  }

  requestPut(url: string, params: string) {
    this.createHeaders();
    console.log("body put", params);
    let options = new RequestOptions({ headers: this.mHeaderWithKey });
    return this.mHttpService.requestPut(url, params, { headers: this.mHeaderWithKey });
  }

 

}
