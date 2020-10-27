import { ShortnerUrisDto } from "./shortner-uris.dto";

export class ShortnerUrisDtoBuilder {

    private readonly _shortnerUrisDto: ShortnerUrisDto;

    constructor() {
        this._shortnerUrisDto = new ShortnerUrisDto();
    }

    withId (id: number): ShortnerUrisDtoBuilder {
        this._shortnerUrisDto.id = id;
        return this;
    }

    withUrl (url: string): ShortnerUrisDtoBuilder {
        this._shortnerUrisDto.url = url;
        return this;
    }

    withNewUrl (shortUri: string): ShortnerUrisDtoBuilder {
        this._shortnerUrisDto.newUrl = shortUri;
        return this;
    }

    build (): ShortnerUrisDto {
        return this._shortnerUrisDto;
    }

}