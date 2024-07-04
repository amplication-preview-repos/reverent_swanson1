import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DataFileTitle } from "../dataFile/DataFileTitle";

export const GeneratedImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceInput
          source="dataFile.id"
          reference="DataFile"
          label="dataFile"
        >
          <SelectInput optionText={DataFileTitle} />
        </ReferenceInput>
        <TextInput label="fileUrl" source="fileUrl" />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="template ID" source="templateId" />
      </SimpleForm>
    </Edit>
  );
};
