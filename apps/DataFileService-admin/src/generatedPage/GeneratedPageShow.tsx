import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DATAFILE_TITLE_FIELD } from "../dataFile/DataFileTitle";

export const GeneratedPageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="template ID" source="templateId" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
