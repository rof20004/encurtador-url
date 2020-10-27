import { ShortnerUris } from "./shortner-uris.entity";

export class ShortnerUrisBuilder {

    private readonly _shortnerUris: ShortnerUris;

    constructor() {
        this._shortnerUris = new ShortnerUris();
    }

    withUrl (url: string): ShortnerUrisBuilder {
        this._shortnerUris.url = url;
        return this;
    }

    build (): ShortnerUris {
        return this._shortnerUris;
    }

}