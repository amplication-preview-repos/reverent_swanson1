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
import { DataFileService } from "../dataFile.service";
import { DataFileCreateInput } from "./DataFileCreateInput";
import { DataFile } from "./DataFile";
import { DataFileFindManyArgs } from "./DataFileFindManyArgs";
import { DataFileWhereUniqueInput } from "./DataFileWhereUniqueInput";
import { DataFileUpdateInput } from "./DataFileUpdateInput";
import { GeneratedImageFindManyArgs } from "../../generatedImage/base/GeneratedImageFindManyArgs";
import { GeneratedImage } from "../../generatedImage/base/GeneratedImage";
import { GeneratedImageWhereUniqueInput } from "../../generatedImage/base/GeneratedImageWhereUniqueInput";
import { GeneratedPageFindManyArgs } from "../../generatedPage/base/GeneratedPageFindManyArgs";
import { GeneratedPage } from "../../generatedPage/base/GeneratedPage";
import { GeneratedPageWhereUniqueInput } from "../../generatedPage/base/GeneratedPageWhereUniqueInput";

export class DataFileControllerBase {
  constructor(protected readonly service: DataFileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DataFile })
  async createDataFile(
    @common.Body() data: DataFileCreateInput
  ): Promise<DataFile> {
    return await this.service.createDataFile({
      data: data,
      select: {
        createdAt: true,
        createdBy: true,
        fileUrl: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DataFile] })
  @ApiNestedQuery(DataFileFindManyArgs)
  async dataFiles(@common.Req() request: Request): Promise<DataFile[]> {
    const args = plainToClass(DataFileFindManyArgs, request.query);
    return this.service.dataFiles({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        fileUrl: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DataFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dataFile(
    @common.Param() params: DataFileWhereUniqueInput
  ): Promise<DataFile | null> {
    const result = await this.service.dataFile({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        fileUrl: true,
        id: true,
        name: true,
        typeField: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DataFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDataFile(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() data: DataFileUpdateInput
  ): Promise<DataFile | null> {
    try {
      return await this.service.updateDataFile({
        where: params,
        data: data,
        select: {
          createdAt: true,
          createdBy: true,
          fileUrl: true,
          id: true,
          name: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: DataFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDataFile(
    @common.Param() params: DataFileWhereUniqueInput
  ): Promise<DataFile | null> {
    try {
      return await this.service.deleteDataFile({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          fileUrl: true,
          id: true,
          name: true,
          typeField: true,
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

  @common.Get("/:id/generatedImages")
  @ApiNestedQuery(GeneratedImageFindManyArgs)
  async findGeneratedImages(
    @common.Req() request: Request,
    @common.Param() params: DataFileWhereUniqueInput
  ): Promise<GeneratedImage[]> {
    const query = plainToClass(GeneratedImageFindManyArgs, request.query);
    const results = await this.service.findGeneratedImages(params.id, {
      ...query,
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
        templateId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/generatedImages")
  async connectGeneratedImages(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() body: GeneratedImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      generatedImages: {
        connect: body,
      },
    };
    await this.service.updateDataFile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/generatedImages")
  async updateGeneratedImages(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() body: GeneratedImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      generatedImages: {
        set: body,
      },
    };
    await this.service.updateDataFile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/generatedImages")
  async disconnectGeneratedImages(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() body: GeneratedImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      generatedImages: {
        disconnect: body,
      },
    };
    await this.service.updateDataFile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/generatedPages")
  @ApiNestedQuery(GeneratedPageFindManyArgs)
  async findGeneratedPages(
    @common.Req() request: Request,
    @common.Param() params: DataFileWhereUniqueInput
  ): Promise<GeneratedPage[]> {
    const query = plainToClass(GeneratedPageFindManyArgs, request.query);
    const results = await this.service.findGeneratedPages(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        createdBy: true,

        dataFile: {
          select: {
            id: true,
          },
        },

        id: true,
        metaData: true,
        status: true,
        templateId: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/generatedPages")
  async connectGeneratedPages(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() body: GeneratedPageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      generatedPages: {
        connect: body,
      },
    };
    await this.service.updateDataFile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/generatedPages")
  async updateGeneratedPages(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() body: GeneratedPageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      generatedPages: {
        set: body,
      },
    };
    await this.service.updateDataFile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/generatedPages")
  async disconnectGeneratedPages(
    @common.Param() params: DataFileWhereUniqueInput,
    @common.Body() body: GeneratedPageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      generatedPages: {
        disconnect: body,
      },
    };
    await this.service.updateDataFile({
      where: params,
      data,
      select: { id: true },
    });
  }
}
