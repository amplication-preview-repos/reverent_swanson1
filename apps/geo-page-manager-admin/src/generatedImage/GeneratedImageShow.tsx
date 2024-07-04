import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DATAFILE_TITLE_FIELD } from "../dataFile/DataFileTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const GeneratedImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
