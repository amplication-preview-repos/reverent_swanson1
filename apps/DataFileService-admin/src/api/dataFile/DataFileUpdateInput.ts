import { GeneratedImageUpdateManyWithoutDataFilesInput } from "./GeneratedImageUpdateManyWithoutDataFilesInput";
import { GeneratedPageUpdateManyWithoutDataFilesInput } from "./GeneratedPageUpdateManyWithoutDataFilesInput";

export type DataFileUpdateInput = {
  createdBy?: string | null;
  fileUrl?: string | null;
  generatedImages?: GeneratedImageUpdateManyWithoutDataFilesInput;
  generatedPages?: GeneratedPageUpdateManyWithoutDataFilesInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
