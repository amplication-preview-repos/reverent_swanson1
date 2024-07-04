import { InputJsonValue } from "../../types";

export type TemplateUpdateInput = {
  createdBy?: string | null;
  file?: InputJsonValue;
  generatedImages?: InputJsonValue;
  generatedPages?: InputJsonValue;
  name?: string | null;
  typeField?: "Option1" | null;
};
