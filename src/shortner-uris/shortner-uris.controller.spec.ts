import { Test, TestingModule } from '@nestjs/testing';
import { ShortnerUrisController } from './shortner-uris.controller';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ShortnerUrisService } from './shortner-uris.service';
import * as request from 'supertest';

const mockShortnerUrisService = () => ({
    createShortUri: jest.fn()
});

describe('ShortnerUrisController', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ShortnerUrisController],
            providers: [{
                provide: ShortnerUrisService,
                useFactory: mockShortnerUrisService
            }]
        }).compile();

        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({
            transform: true
        }));
        await app.init();
    });

    it('expects to return 400 for create short uri because has not url is not defined or is empty', async () => {
        await request(app.getHttpServer())
            .post('/api/v1/shortner-uris')
            .expect(400);
    });

    it('expects to return 201 for create short uri because url is defined', async () => {
        await request(app.getHttpServer())
            .post('/api/v1/shortner-uris')
            .send({ url: 'https://www.google.com.br' })
            .expect(201);
    });
});