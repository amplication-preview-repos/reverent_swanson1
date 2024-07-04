import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { GeneratedImageListRelationFilter } from "../generatedImage/GeneratedImageListRelationFilter";
import { GeneratedPageListRelationFilter } from "../generatedPage/GeneratedPageListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TemplateWhereInput = {
  createdBy?: StringNullableFilter;
  file?: JsonFilter;
  generatedImages?: GeneratedImageListRelationFilter;
  generatedPages?: GeneratedPageListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
