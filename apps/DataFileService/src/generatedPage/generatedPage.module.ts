import { Module } from "@nestjs/common";
import { GeneratedPageModuleBase } from "./base/generatedPage.module.base";
import { GeneratedPageService } from "./generatedPage.service";
import { GeneratedPageController } from "./generatedPage.controller";
import { GeneratedPageResolver } from "./generatedPage.resolver";

@Module({
  imports: [GeneratedPageModuleBase],
  controllers: [GeneratedPageController],
  providers: [GeneratedPageService, GeneratedPageResolver],
  exports: [GeneratedPageService],
})
export class GeneratedPageModule {}
