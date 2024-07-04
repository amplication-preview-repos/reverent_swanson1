import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GeneratedPageResolverBase } from "./base/generatedPage.resolver.base";
import { GeneratedPage } from "./base/GeneratedPage";
import { GeneratedPageService } from "./generatedPage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GeneratedPage)
export class GeneratedPageResolver extends GeneratedPageResolverBase {
  constructor(
    protected readonly service: GeneratedPageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
