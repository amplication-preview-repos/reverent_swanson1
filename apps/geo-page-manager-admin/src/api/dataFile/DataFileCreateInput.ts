import { GeneratedImageCreateNestedManyWithoutDataFilesInput } from "./GeneratedImageCreateNestedManyWithoutDataFilesInput";
import { GeneratedPageCreateNestedManyWithoutDataFilesInput } from "./GeneratedPageCreateNestedManyWithoutDataFilesInput";

export type DataFileCreateInput = {
  createdBy?: string | null;
  fileUrl?: string | null;
  generatedImages?: GeneratedImageCreateNestedManyWithoutDataFilesInput;
  generatedPages?: GeneratedPageCreateNestedManyWithoutDataFilesInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
