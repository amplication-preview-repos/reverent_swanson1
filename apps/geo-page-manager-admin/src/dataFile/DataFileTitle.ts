import { DataFile as TDataFile } from "../api/dataFile/DataFile";

export const DATAFILE_TITLE_FIELD = "name";

export const DataFileTitle = (record: TDataFile): string => {
  return record.name?.toString() || String(record.id);
};
