import {Test, TestingModule} from "@nestjs/testing";
import {DateActionsService} from "../date-actions.service";

describe("DateActionsService", () => {
  let service: DateActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateActionsService],
    }).compile();

    service = module.get<DateActionsService>(DateActionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
