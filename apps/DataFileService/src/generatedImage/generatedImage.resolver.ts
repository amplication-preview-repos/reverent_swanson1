import * as graphql from "@nestjs/graphql";
import { GeneratedImageResolverBase } from "./base/generatedImage.resolver.base";
import { GeneratedImage } from "./base/GeneratedImage";
import { GeneratedImageService } from "./generatedImage.service";

@graphql.Resolver(() => GeneratedImage)
export class GeneratedImageResolver extends GeneratedImageResolverBase {
  constructor(protected readonly service: GeneratedImageService) {
    super(service);
  }
}
