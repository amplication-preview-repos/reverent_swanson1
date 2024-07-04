import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedImageWhereInput = {
  createdBy?: StringNullableFilter;
  dataFile?: DataFileWhereUniqueInput;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
  metaData?: JsonFilter;
  name?: StringNullableFilter;
  template?: TemplateWhereUniqueInput;
};
