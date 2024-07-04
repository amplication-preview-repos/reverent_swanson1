import { DataFile } from "../dataFile/DataFile";
import { JsonValue } from "type-fest";

export type GeneratedImage = {
  createdAt: Date;
  createdBy: string | null;
  dataFile?: DataFile | null;
  fileUrl: string | null;
  id: string;
  metaData: JsonValue;
  name: string | null;
  templateId: string | null;
  updatedAt: Date;
};
