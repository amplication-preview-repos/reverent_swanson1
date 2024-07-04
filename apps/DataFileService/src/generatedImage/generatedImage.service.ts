import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneratedImageServiceBase } from "./base/generatedImage.service.base";

@Injectable()
export class GeneratedImageService extends GeneratedImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
