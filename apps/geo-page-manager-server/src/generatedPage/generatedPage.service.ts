import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneratedPageServiceBase } from "./base/generatedPage.service.base";

@Injectable()
export class GeneratedPageService extends GeneratedPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
