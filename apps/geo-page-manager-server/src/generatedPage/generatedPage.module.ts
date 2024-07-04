import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeneratedPageModuleBase } from "./base/generatedPage.module.base";
import { GeneratedPageService } from "./generatedPage.service";
import { GeneratedPageController } from "./generatedPage.controller";
import { GeneratedPageResolver } from "./generatedPage.resolver";

@Module({
  imports: [GeneratedPageModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeneratedPageController],
  providers: [GeneratedPageService, GeneratedPageResolver],
  exports: [GeneratedPageService],
})
export class GeneratedPageModule {}
