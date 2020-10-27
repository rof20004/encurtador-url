import { ApiProperty } from "@nestjs/swagger";
import { IsUrl } from "class-validator";
import { ShortnerUrisBuilder } from "../shortner-uris.builder";
import { ShortnerUris } from "../shortner-uris.entity";

export class CreateShortnerUrisDto {

    @IsUrl({}, { message: 'url inválida' })
    @ApiProperty({ name: 'url', description: 'URL que será encurtada', required: true })
    url: string;

    toEntity (): ShortnerUris {
        return new ShortnerUrisBuilder()
            .withUrl(this.url)
            .build();
    }

}