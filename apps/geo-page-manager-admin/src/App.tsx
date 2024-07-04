import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GeneratedPageList } from "./generatedPage/GeneratedPageList";
import { GeneratedPageCreate } from "./generatedPage/GeneratedPageCreate";
import { GeneratedPageEdit } from "./generatedPage/GeneratedPageEdit";
import { GeneratedPageShow } from "./generatedPage/GeneratedPageShow";
import { DataFileList } from "./dataFile/DataFileList";
import { DataFileCreate } from "./dataFile/DataFileCreate";
import { DataFileEdit } from "./dataFile/DataFileEdit";
import { DataFileShow } from "./dataFile/DataFileShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { GeneratedImageList } from "./generatedImage/GeneratedImageList";
import { GeneratedImageCreate } from "./generatedImage/GeneratedImageCreate";
import { GeneratedImageEdit } from "./generatedImage/GeneratedImageEdit";
import { GeneratedImageShow } from "./generatedImage/GeneratedImageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GeoPageManager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GeneratedPage"
          list={GeneratedPageList}
          edit={GeneratedPageEdit}
          create={GeneratedPageCreate}
          show={GeneratedPageShow}
        />
        <Resource
          name="DataFile"
          list={DataFileList}
          edit={DataFileEdit}
          create={DataFileCreate}
          show={DataFileShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="GeneratedImage"
          list={GeneratedImageList}
          edit={GeneratedImageEdit}
          create={GeneratedImageCreate}
          show={GeneratedImageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
