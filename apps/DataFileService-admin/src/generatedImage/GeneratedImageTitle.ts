import { GeneratedImage as TGeneratedImage } from "../api/generatedImage/GeneratedImage";

export const GENERATEDIMAGE_TITLE_FIELD = "name";

export const GeneratedImageTitle = (record: TGeneratedImage): string => {
  return record.name?.toString() || String(record.id);
};
