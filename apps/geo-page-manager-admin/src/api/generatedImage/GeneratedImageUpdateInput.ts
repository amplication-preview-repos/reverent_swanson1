import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedImageUpdateInput = {
  createdBy?: string | null;
  dataFile?: DataFileWhereUniqueInput | null;
  fileUrl?: string | null;
  metaData?: InputJsonValue;
  name?: string | null;
  template?: TemplateWhereUniqueInput | null;
};
