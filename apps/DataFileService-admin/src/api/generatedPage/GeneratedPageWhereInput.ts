import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GeneratedPageWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  dataFile?: DataFileWhereUniqueInput;
  id?: StringFilter;
  metaData?: JsonFilter;
  status?: "Option1";
  templateId?: StringNullableFilter;
  title?: StringNullableFilter;
};
