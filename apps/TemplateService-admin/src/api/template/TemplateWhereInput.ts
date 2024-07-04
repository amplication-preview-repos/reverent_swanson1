import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type TemplateWhereInput = {
  createdBy?: StringNullableFilter;
  file?: JsonFilter;
  generatedImages?: JsonFilter;
  generatedPages?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
