
import { Injectable } from '@angular/core';
import { HttpService } from "../http-service";
import { StoreHttpService } from "./store-http-service";
import { StoreConfig } from "./store-config";
@Injectable()
export class StoreModule {
    private mStoreHttpService: StoreHttpService;

    private mConfig: StoreConfig;
    constructor(private mHttpService: HttpService) {

        this.mStoreHttpService = new StoreHttpService(mHttpService);
        this.mConfig = new StoreConfig();
    }
    listenWindowResizeEvent() {
        window.onresize = () => {
            console.log("on window resize from module");

        };
    }
    /**===================Get Functions=================== */
    getHttpService() {
        return this.mStoreHttpService;
    }
    getAppConfig() {
        return this.mConfig;
    }
    loadConfig() {
        return new Promise((resolve, reject) => {
            this.mHttpService.getHttp().request("assets/config/store.json").subscribe(
                data => {
                    this.mConfig.onResponseConfig(data.json());
                    resolve();
                }
            );
        });
    }
    onUpdate() {

    }

}


