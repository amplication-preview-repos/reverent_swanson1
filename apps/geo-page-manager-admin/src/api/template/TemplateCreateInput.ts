import { InputJsonValue } from "../../types";
import { GeneratedImageCreateNestedManyWithoutTemplatesInput } from "./GeneratedImageCreateNestedManyWithoutTemplatesInput";
import { GeneratedPageCreateNestedManyWithoutTemplatesInput } from "./GeneratedPageCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  createdBy?: string | null;
  file?: InputJsonValue;
  generatedImages?: GeneratedImageCreateNestedManyWithoutTemplatesInput;
  generatedPages?: GeneratedPageCreateNestedManyWithoutTemplatesInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
