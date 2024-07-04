import { Module } from "@nestjs/common";
import { GeneratedImageModuleBase } from "./base/generatedImage.module.base";
import { GeneratedImageService } from "./generatedImage.service";
import { GeneratedImageController } from "./generatedImage.controller";
import { GeneratedImageResolver } from "./generatedImage.resolver";

@Module({
  imports: [GeneratedImageModuleBase],
  controllers: [GeneratedImageController],
  providers: [GeneratedImageService, GeneratedImageResolver],
  exports: [GeneratedImageService],
})
export class GeneratedImageModule {}
