import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";
import { UserSignupInput } from "../authentication/UserSignupInput";
import { ImageGenerationDto } from "../authentication/ImageGenerationDto";
import { PageGenerationDto } from "../authentication/PageGenerationDto";
import { DataFileDto } from "../authentication/DataFileDto";
import { TemplateDto } from "../authentication/TemplateDto";
import { UserLoginInput } from "../authentication/UserLoginInput";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Post("/generate/images")
  @swagger.ApiOkResponse({
    type: ImageGenerationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateImages(
    @common.Body()
    body: UserSignupInput
  ): Promise<ImageGenerationDto> {
        return this.service.GenerateImages(body);
      }

  @common.Post("/generate/pages")
  @swagger.ApiOkResponse({
    type: PageGenerationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GeneratePages(
    @common.Body()
    body: UserSignupInput
  ): Promise<PageGenerationDto> {
        return this.service.GeneratePages(body);
      }

  @common.Post("/datafiles")
  @swagger.ApiOkResponse({
    type: DataFileDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadDataFile(
    @common.Body()
    body: UserSignupInput
  ): Promise<DataFileDto> {
        return this.service.UploadDataFile(body);
      }

  @common.Post("/templates")
  @swagger.ApiOkResponse({
    type: TemplateDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadTemplate(
    @common.Body()
    body: UserSignupInput
  ): Promise<TemplateDto> {
        return this.service.UploadTemplate(body);
      }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: UserLoginInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserLogin(
    @common.Body()
    body: UserSignupInput
  ): Promise<UserLoginInput> {
        return this.service.UserLogin(body);
      }

  @common.Post("/signup")
  @swagger.ApiOkResponse({
    type: UserSignupInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserRegistration(
    @common.Body()
    body: UserSignupInput
  ): Promise<UserSignupInput> {
        return this.service.UserRegistration(body);
      }
}
