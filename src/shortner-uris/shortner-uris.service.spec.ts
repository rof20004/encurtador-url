import { Test, TestingModule } from '@nestjs/testing';
import { CreateShortnerUrisDtoBuilder } from './dto/create-shortner-uris-dto.builder';
import { ShortnerUrisRepository } from './shortner-uris.repository';
import { ShortnerUrisService } from './shortner-uris.service';

const mockShortnerUrisRepository = () => ({
  save: jest.fn()
});

describe('ShortnerUrisService', () => {
  let service;
  let repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortnerUrisService, { provide: ShortnerUrisRepository, useFactory: mockShortnerUrisRepository }],
    }).compile();

    service = module.get<ShortnerUrisService>(ShortnerUrisService);
    repository = module.get<ShortnerUrisRepository>(ShortnerUrisRepository);
  });

  it('check if createShortUri was defined', () => {
    expect(service.createShortUri).toBeDefined();
  });

  it('validate createShortUri parameters', async () => {
    expect(repository.save).not.toHaveBeenCalled();

    const mockCreateShortnerUris = new CreateShortnerUrisDtoBuilder()
      .withUrl('https://www.google.com.br')
      .build();

    await service.createShortUri(mockCreateShortnerUris);
    expect(repository.save).toHaveBeenCalledWith(mockCreateShortnerUris);
  });

  it('check if createShortUri executed successfuly', async () => {
    expect(repository.save).not.toHaveBeenCalled();

    const mockCreateShortnerUris = new CreateShortnerUrisDtoBuilder()
      .withUrl('https://www.google.com.br')
      .build();

    const result = await service.createShortUri(mockCreateShortnerUris);
    expect(repository.save).toHaveBeenCalledWith(mockCreateShortnerUris);
    expect(result).rejects.not.toThrow;
  });
});
