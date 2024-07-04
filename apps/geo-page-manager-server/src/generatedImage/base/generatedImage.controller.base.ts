/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GeneratedImageService } from "../generatedImage.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GeneratedImageCreateInput } from "./GeneratedImageCreateInput";
import { GeneratedImage } from "./GeneratedImage";
import { GeneratedImageFindManyArgs } from "./GeneratedImageFindManyArgs";
import { GeneratedImageWhereUniqueInput } from "./GeneratedImageWhereUniqueInput";
import { GeneratedImageUpdateInput } from "./GeneratedImageUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GeneratedImageControllerBase {
  constructor(
    protected readonly service: GeneratedImageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GeneratedImage })
  @nestAccessControl.UseRoles({
    resource: "GeneratedImage",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGeneratedImage(
    @common.Body() data: GeneratedImageCreateInput
  ): Promise<GeneratedImage> {
    return await this.service.createGeneratedImage({
      data: {
        ...data,

        dataFile: data.dataFile
          ? {
              connect: data.dataFile,
            }
          : undefined,

        template: data.template
          ? {
              connect: data.template,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        createdBy: true,

        dataFile: {
          select: {
            id: true,
          },
        },

        fileUrl: true,
        id: true,
        metaData: true,
        name: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GeneratedImage] })
  @ApiNestedQuery(GeneratedImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GeneratedImage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async generatedImages(
    @common.Req() request: Request
  ): Promise<GeneratedImage[]> {
    const args = plainToClass(GeneratedImageFindManyArgs, request.query);
    return this.service.generatedImages({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,

        dataFile: {
          select: {
            id: true,
          },
        },

        fileUrl: true,
        id: true,
        metaData: true,
        name: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GeneratedImage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneratedImage",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async generatedImage(
    @common.Param() params: GeneratedImageWhereUniqueInput
  ): Promise<GeneratedImage | null> {
    const result = await this.service.generatedImage({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,

        dataFile: {
          select: {
            id: true,
          },
        },

        fileUrl: true,
        id: true,
        metaData: true,
        name: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GeneratedImage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneratedImage",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGeneratedImage(
    @common.Param() params: GeneratedImageWhereUniqueInput,
    @common.Body() data: GeneratedImageUpdateInput
  ): Promise<GeneratedImage | null> {
    try {
      return await this.service.updateGeneratedImage({
        where: params,
        data: {
          ...data,

          dataFile: data.dataFile
            ? {
                connect: data.dataFile,
              }
            : undefined,

          template: data.template
            ? {
                connect: data.template,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          createdBy: true,

          dataFile: {
            select: {
              id: true,
            },
          },

          fileUrl: true,
          id: true,
          metaData: true,
          name: true,

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GeneratedImage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneratedImage",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGeneratedImage(
    @common.Param() params: GeneratedImageWhereUniqueInput
  ): Promise<GeneratedImage | null> {
    try {
      return await this.service.deleteGeneratedImage({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,

          dataFile: {
            select: {
              id: true,
            },
          },

          fileUrl: true,
          id: true,
          metaData: true,
          name: true,

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
