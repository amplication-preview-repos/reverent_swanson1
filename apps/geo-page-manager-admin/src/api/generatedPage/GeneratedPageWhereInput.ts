import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedPageWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  dataFile?: DataFileWhereUniqueInput;
  id?: StringFilter;
  metaData?: JsonFilter;
  status?: "Option1";
  template?: TemplateWhereUniqueInput;
  title?: StringNullableFilter;
};
