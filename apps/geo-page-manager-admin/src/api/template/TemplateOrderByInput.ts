import { SortOrder } from "../../util/SortOrder";

export type TemplateOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
