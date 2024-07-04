import { JsonValue } from "type-fest";
import { GeneratedImage } from "../generatedImage/GeneratedImage";
import { GeneratedPage } from "../generatedPage/GeneratedPage";

export type Template = {
  createdAt: Date;
  createdBy: string | null;
  file: JsonValue;
  generatedImages?: Array<GeneratedImage>;
  generatedPages?: Array<GeneratedPage>;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
