import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataFileService } from "./dataFile.service";
import { DataFileControllerBase } from "./base/dataFile.controller.base";

@swagger.ApiTags("dataFiles")
@common.Controller("dataFiles")
export class DataFileController extends DataFileControllerBase {
  constructor(
    protected readonly service: DataFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
