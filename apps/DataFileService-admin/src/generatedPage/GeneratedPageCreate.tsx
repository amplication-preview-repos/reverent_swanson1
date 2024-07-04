import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DataFileTitle } from "../dataFile/DataFileTitle";

export const GeneratedPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceInput
          source="dataFile.id"
          reference="DataFile"
          label="dataFile"
        >
          <SelectInput optionText={DataFileTitle} />
        </ReferenceInput>
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="template ID" source="templateId" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
