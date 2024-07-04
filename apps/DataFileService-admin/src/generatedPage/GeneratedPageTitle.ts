import { GeneratedPage as TGeneratedPage } from "../api/generatedPage/GeneratedPage";

export const GENERATEDPAGE_TITLE_FIELD = "title";

export const GeneratedPageTitle = (record: TGeneratedPage): string => {
  return record.title?.toString() || String(record.id);
};
