import { DataFile } from "../dataFile/DataFile";
import { JsonValue } from "type-fest";
import { Template } from "../template/Template";

export type GeneratedImage = {
  createdAt: Date;
  createdBy: string | null;
  dataFile?: DataFile | null;
  fileUrl: string | null;
  id: string;
  metaData: JsonValue;
  name: string | null;
  template?: Template | null;
  updatedAt: Date;
};
