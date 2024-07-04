import { DataFile } from "../dataFile/DataFile";
import { JsonValue } from "type-fest";

export type GeneratedPage = {
  content: string | null;
  createdAt: Date;
  createdBy: string | null;
  dataFile?: DataFile | null;
  id: string;
  metaData: JsonValue;
  status?: "Option1" | null;
  templateId: string | null;
  title: string | null;
  updatedAt: Date;
};
