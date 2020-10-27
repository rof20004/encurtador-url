import { CreateShortnerUrisDto } from "./create-shortner-uris.dto";

export class CreateShortnerUrisDtoBuilder {

    private readonly _createShortnerUrisDto: CreateShortnerUrisDto;

    constructor() {
        this._createShortnerUrisDto = new CreateShortnerUrisDto();
    }

    withUrl (url: string): CreateShortnerUrisDtoBuilder {
        this._createShortnerUrisDto.url = url;
        return this;
    }

    build (): CreateShortnerUrisDto {
        return this._createShortnerUrisDto;
    }

}