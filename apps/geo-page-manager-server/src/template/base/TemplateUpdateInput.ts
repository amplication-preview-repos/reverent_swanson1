/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { GeneratedImageUpdateManyWithoutTemplatesInput } from "./GeneratedImageUpdateManyWithoutTemplatesInput";
import { Type } from "class-transformer";
import { GeneratedPageUpdateManyWithoutTemplatesInput } from "./GeneratedPageUpdateManyWithoutTemplatesInput";
import { EnumTemplateTypeField } from "./EnumTemplateTypeField";

@InputType()
class TemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  file?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => GeneratedImageUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => GeneratedImageUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => GeneratedImageUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  generatedImages?: GeneratedImageUpdateManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: () => GeneratedPageUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => GeneratedPageUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => GeneratedPageUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  generatedPages?: GeneratedPageUpdateManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumTemplateTypeField,
  })
  @IsEnum(EnumTemplateTypeField)
  @IsOptional()
  @Field(() => EnumTemplateTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { TemplateUpdateInput as TemplateUpdateInput };
