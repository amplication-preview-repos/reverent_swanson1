import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GeneratedPageCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  dataFile?: DataFileWhereUniqueInput | null;
  metaData?: InputJsonValue;
  status?: "Option1" | null;
  templateId?: string | null;
  title?: string | null;
};
