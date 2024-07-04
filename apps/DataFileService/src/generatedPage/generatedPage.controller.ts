import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneratedPageService } from "./generatedPage.service";
import { GeneratedPageControllerBase } from "./base/generatedPage.controller.base";

@swagger.ApiTags("generatedPages")
@common.Controller("generatedPages")
export class GeneratedPageController extends GeneratedPageControllerBase {
  constructor(protected readonly service: GeneratedPageService) {
    super(service);
  }
}
