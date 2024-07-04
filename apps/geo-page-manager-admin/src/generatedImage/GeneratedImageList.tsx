import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DATAFILE_TITLE_FIELD } from "../dataFile/DataFileTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const GeneratedImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GeneratedImages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <ReferenceField
          label="dataFile"
          source="datafile.id"
          reference="DataFile"
        >
          <TextField source={DATAFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="ID" source="id" />
        <TextField label="metaData" source="metaData" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="template"
          source="template.id"
          reference="Template"
        >
          <TextField source={TEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
