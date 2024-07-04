import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GeneratedImageListRelationFilter } from "../generatedImage/GeneratedImageListRelationFilter";
import { GeneratedPageListRelationFilter } from "../generatedPage/GeneratedPageListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataFileWhereInput = {
  createdBy?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  generatedImages?: GeneratedImageListRelationFilter;
  generatedPages?: GeneratedPageListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
