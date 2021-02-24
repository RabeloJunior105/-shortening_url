import {Test, TestingModule} from "@nestjs/testing";
import {getRepositoryToken} from "@nestjs/typeorm";
import {DateActionsService} from "../../../shared/date-actions/date-actions.service";
import {GenerateStringService} from "../../../shared/generate-string/generate-string.service";
import {UrlDTO} from "../dto/url.dto";
import {UrlShortenNotFound} from "../exception/urlShortenNotFound";
import {Shorten} from "../shorten.entity";
import {ShortenService} from "../shorten.service";
import TestUtil from "./ultil/TestUtil";

describe("ShortenService", () => {
  let service: ShortenService;

  const mockRepository = {
    findById: jest.fn(),
    findBy: jest.fn(),
    store: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShortenService,
        GenerateStringService,
        DateActionsService,
        {
          provide: getRepositoryToken(Shorten),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ShortenService>(ShortenService);
  });

  beforeEach(() => {
    mockRepository.findBy.mockReset();
    mockRepository.findById.mockReset();
    mockRepository.store.mockReset();
  });

  it("should be listing the shorten by parameter encode", async () => {
    const urlShorten = TestUtil.giveMeFindParam();
    mockRepository.findBy.mockReturnValue(urlShorten);

    const url = await service.findByParameterUrl("ds15a");

    expect(url).toMatchObject({
      id: url.id,
      token_shortener: url.token_shortener,
      url_normal: url.url_normal,
      dt_create: url.dt_create,
      expiration: url.expiration,
      unit_expiration: url.unit_expiration,
    });

    expect(mockRepository.findBy).toHaveBeenCalledTimes(1);
  });

  it("should return a exception when does not find a encode shorten", async () => {
    const urlShorten = TestUtil.giveMeFindParam();
    mockRepository.findBy.mockReturnValue(urlShorten);

    expect(service.findByParameterUrl("encode2")).rejects.toBeInstanceOf(
      UrlShortenNotFound,
    );
  });

});
