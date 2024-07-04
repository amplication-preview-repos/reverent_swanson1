import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GeneratedImageResolverBase } from "./base/generatedImage.resolver.base";
import { GeneratedImage } from "./base/GeneratedImage";
import { GeneratedImageService } from "./generatedImage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GeneratedImage)
export class GeneratedImageResolver extends GeneratedImageResolverBase {
  constructor(
    protected readonly service: GeneratedImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
