import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeneratedImageService } from "./generatedImage.service";
import { GeneratedImageControllerBase } from "./base/generatedImage.controller.base";

@swagger.ApiTags("generatedImages")
@common.Controller("generatedImages")
export class GeneratedImageController extends GeneratedImageControllerBase {
  constructor(
    protected readonly service: GeneratedImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
