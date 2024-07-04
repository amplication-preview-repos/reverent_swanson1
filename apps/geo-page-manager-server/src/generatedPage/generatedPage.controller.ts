import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeneratedPageService } from "./generatedPage.service";
import { GeneratedPageControllerBase } from "./base/generatedPage.controller.base";

@swagger.ApiTags("generatedPages")
@common.Controller("generatedPages")
export class GeneratedPageController extends GeneratedPageControllerBase {
  constructor(
    protected readonly service: GeneratedPageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
