import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedPageCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  dataFile?: DataFileWhereUniqueInput | null;
  metaData?: InputJsonValue;
  status?: "Option1" | null;
  template?: TemplateWhereUniqueInput | null;
  title?: string | null;
};
