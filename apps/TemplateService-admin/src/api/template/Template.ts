import { JsonValue } from "type-fest";

export type Template = {
  createdAt: Date;
  createdBy: string | null;
  file: JsonValue;
  generatedImages: JsonValue;
  generatedPages: JsonValue;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
