import * as graphql from "@nestjs/graphql";
import { ImageGenerationDto } from "../authentication/ImageGenerationDto";
import { PageGenerationDto } from "../authentication/PageGenerationDto";
import { DataFileDto } from "../authentication/DataFileDto";
import { TemplateDto } from "../authentication/TemplateDto";
import { UserLoginInput } from "../authentication/UserLoginInput";
import { UserSignupInput } from "../authentication/UserSignupInput";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => ImageGenerationDto)
  async GenerateImages(
    @graphql.Args()
    args: ImageGenerationDto
  ): Promise<ImageGenerationDto> {
    return this.service.GenerateImages(args);
  }

  @graphql.Mutation(() => PageGenerationDto)
  async GeneratePages(
    @graphql.Args()
    args: PageGenerationDto
  ): Promise<PageGenerationDto> {
    return this.service.GeneratePages(args);
  }

  @graphql.Mutation(() => DataFileDto)
  async UploadDataFile(
    @graphql.Args()
    args: DataFileDto
  ): Promise<DataFileDto> {
    return this.service.UploadDataFile(args);
  }

  @graphql.Mutation(() => TemplateDto)
  async UploadTemplate(
    @graphql.Args()
    args: TemplateDto
  ): Promise<TemplateDto> {
    return this.service.UploadTemplate(args);
  }

  @graphql.Mutation(() => UserLoginInput)
  async UserLogin(
    @graphql.Args()
    args: UserLoginInput
  ): Promise<UserLoginInput> {
    return this.service.UserLogin(args);
  }

  @graphql.Mutation(() => UserSignupInput)
  async UserRegistration(
    @graphql.Args()
    args: UserSignupInput
  ): Promise<UserSignupInput> {
    return this.service.UserRegistration(args);
  }
}
