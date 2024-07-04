import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataFileModuleBase } from "./base/dataFile.module.base";
import { DataFileService } from "./dataFile.service";
import { DataFileController } from "./dataFile.controller";
import { DataFileResolver } from "./dataFile.resolver";

@Module({
  imports: [DataFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataFileController],
  providers: [DataFileService, DataFileResolver],
  exports: [DataFileService],
})
export class DataFileModule {}
