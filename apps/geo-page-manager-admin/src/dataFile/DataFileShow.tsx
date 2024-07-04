import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DATAFILE_TITLE_FIELD } from "./DataFileTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const DataFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="fileUrl" source="fileUrl" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="GeneratedImage"
          target="dataFileId"
          label="GeneratedImages"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="GeneratedPage"
          target="dataFileId"
          label="GeneratedPages"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdBy" source="createdBy" />
            <ReferenceField
              label="dataFile"
              source="datafile.id"
              reference="DataFile"
            >
              <TextField source={DATAFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="metaData" source="metaData" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="template"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
