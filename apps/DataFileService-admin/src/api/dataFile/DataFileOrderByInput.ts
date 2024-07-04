import { SortOrder } from "../../util/SortOrder";

export type DataFileOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
