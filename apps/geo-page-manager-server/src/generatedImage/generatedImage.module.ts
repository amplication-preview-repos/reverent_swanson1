import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeneratedImageModuleBase } from "./base/generatedImage.module.base";
import { GeneratedImageService } from "./generatedImage.service";
import { GeneratedImageController } from "./generatedImage.controller";
import { GeneratedImageResolver } from "./generatedImage.resolver";

@Module({
  imports: [GeneratedImageModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeneratedImageController],
  providers: [GeneratedImageService, GeneratedImageResolver],
  exports: [GeneratedImageService],
})
export class GeneratedImageModule {}
