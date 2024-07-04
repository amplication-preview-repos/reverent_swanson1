import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneratedImageService } from "./generatedImage.service";
import { GeneratedImageControllerBase } from "./base/generatedImage.controller.base";

@swagger.ApiTags("generatedImages")
@common.Controller("generatedImages")
export class GeneratedImageController extends GeneratedImageControllerBase {
  constructor(protected readonly service: GeneratedImageService) {
    super(service);
  }
}
