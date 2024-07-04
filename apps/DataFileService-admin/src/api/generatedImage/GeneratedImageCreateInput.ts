import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GeneratedImageCreateInput = {
  createdBy?: string | null;
  dataFile?: DataFileWhereUniqueInput | null;
  fileUrl?: string | null;
  metaData?: InputJsonValue;
  name?: string | null;
  templateId?: string | null;
};
