import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShortnerUrisDto } from './dto/create-shortner-uris.dto';
import { ShortnerUrisDto } from './dto/shortner-uris.dto';
import { ShortnerUrisRepository } from './shortner-uris.repository';

@Injectable()
export class ShortnerUrisService {

    private MINIMAL_SHORT_URI_SIZE = 5;

    constructor(
        @InjectRepository(ShortnerUrisRepository)
        private readonly shortnerUrisRepository: ShortnerUrisRepository
    ) { }

    async createShortUri (createShortnerUris: CreateShortnerUrisDto): Promise<ShortnerUrisDto> {
        const shortnerUris = createShortnerUris.toEntity();
        await shortnerUris.initialize();

        if (shortnerUris.shortUri.length < this.MINIMAL_SHORT_URI_SIZE) {
            throw new InternalServerErrorException('Não foi possível gerar a url curta');
        }

        await this.shortnerUrisRepository.save(shortnerUris);

        return shortnerUris.toDtoWithNewUrl();
    }

    async getOriginalUri (shortUri: string): Promise<ShortnerUrisDto> {
        const shortnerUris = await this.shortnerUrisRepository.findOne({ shortUri });

        if (!shortnerUris) {
            throw new NotFoundException('Não foi possível encontrar a url informada');
        }

        const currentDate = new Date();
        if (currentDate > shortnerUris.expiration) {
            throw new BadRequestException('A url solicitada expirou');
        }

        return shortnerUris.toDtoWithUrl();
    }

}
