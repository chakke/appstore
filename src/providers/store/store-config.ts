export class StoreConfig {
    private mAppData;

    private mVersion: string = "1.0";


    constructor() {
        this.loadHardConfig();
    }

    private loadHardConfig() {
        this.mVersion = "1.0";
    }
    /**Load config tu file */
    public onResponseConfig(data) {
        if (!data) return;
        this.mAppData = data;
        if (data.version) this.mVersion = data.version;
    }
    public hasData() {
        return this.mAppData != null;
    }

    public get(key: string) {
        if (this.mAppData[key]) return this.mAppData[key];
        return null;
    }




}