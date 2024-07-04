import { GeneratedImage } from "../generatedImage/GeneratedImage";
import { GeneratedPage } from "../generatedPage/GeneratedPage";

export type DataFile = {
  createdAt: Date;
  createdBy: string | null;
  fileUrl: string | null;
  generatedImages?: Array<GeneratedImage>;
  generatedPages?: Array<GeneratedPage>;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
