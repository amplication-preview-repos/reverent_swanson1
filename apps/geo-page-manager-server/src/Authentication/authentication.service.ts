import { Injectable } from "@nestjs/common";
import { ImageGenerationDto } from "../authentication/ImageGenerationDto";
import { PageGenerationDto } from "../authentication/PageGenerationDto";
import { DataFileDto } from "../authentication/DataFileDto";
import { TemplateDto } from "../authentication/TemplateDto";
import { UserLoginInput } from "../authentication/UserLoginInput";
import { UserSignupInput } from "../authentication/UserSignupInput";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async GenerateImages(args: ImageGenerationDto): Promise<ImageGenerationDto> {
    throw new Error("Not implemented");
  }
  async GeneratePages(args: PageGenerationDto): Promise<PageGenerationDto> {
    throw new Error("Not implemented");
  }
  async UploadDataFile(args: DataFileDto): Promise<DataFileDto> {
    throw new Error("Not implemented");
  }
  async UploadTemplate(args: TemplateDto): Promise<TemplateDto> {
    throw new Error("Not implemented");
  }
  async UserLogin(args: UserLoginInput): Promise<UserLoginInput> {
    throw new Error("Not implemented");
  }
  async UserRegistration(args: UserSignupInput): Promise<UserSignupInput> {
    throw new Error("Not implemented");
  }
}
