import { DataFileWhereUniqueInput } from "../dataFile/DataFileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type GeneratedImageUpdateInput = {
  createdBy?: string | null;
  dataFile?: DataFileWhereUniqueInput | null;
  fileUrl?: string | null;
  metaData?: InputJsonValue;
  name?: string | null;
  templateId?: string | null;
};
