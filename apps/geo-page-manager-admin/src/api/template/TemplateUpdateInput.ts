import { InputJsonValue } from "../../types";
import { GeneratedImageUpdateManyWithoutTemplatesInput } from "./GeneratedImageUpdateManyWithoutTemplatesInput";
import { GeneratedPageUpdateManyWithoutTemplatesInput } from "./GeneratedPageUpdateManyWithoutTemplatesInput";

export type TemplateUpdateInput = {
  createdBy?: string | null;
  file?: InputJsonValue;
  generatedImages?: GeneratedImageUpdateManyWithoutTemplatesInput;
  generatedPages?: GeneratedPageUpdateManyWithoutTemplatesInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
