import * as graphql from "@nestjs/graphql";
import { GeneratedPageResolverBase } from "./base/generatedPage.resolver.base";
import { GeneratedPage } from "./base/GeneratedPage";
import { GeneratedPageService } from "./generatedPage.service";

@graphql.Resolver(() => GeneratedPage)
export class GeneratedPageResolver extends GeneratedPageResolverBase {
  constructor(protected readonly service: GeneratedPageService) {
    super(service);
  }
}
