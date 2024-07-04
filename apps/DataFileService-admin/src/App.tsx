import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataFileList } from "./dataFile/DataFileList";
import { DataFileCreate } from "./dataFile/DataFileCreate";
import { DataFileEdit } from "./dataFile/DataFileEdit";
import { DataFileShow } from "./dataFile/DataFileShow";
import { GeneratedImageList } from "./generatedImage/GeneratedImageList";
import { GeneratedImageCreate } from "./generatedImage/GeneratedImageCreate";
import { GeneratedImageEdit } from "./generatedImage/GeneratedImageEdit";
import { GeneratedImageShow } from "./generatedImage/GeneratedImageShow";
import { GeneratedPageList } from "./generatedPage/GeneratedPageList";
import { GeneratedPageCreate } from "./generatedPage/GeneratedPageCreate";
import { GeneratedPageEdit } from "./generatedPage/GeneratedPageEdit";
import { GeneratedPageShow } from "./generatedPage/GeneratedPageShow";
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
        title={"DataFileService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataFile"
          list={DataFileList}
          edit={DataFileEdit}
          create={DataFileCreate}
          show={DataFileShow}
        />
        <Resource
          name="GeneratedImage"
          list={GeneratedImageList}
          edit={GeneratedImageEdit}
          create={GeneratedImageCreate}
          show={GeneratedImageShow}
        />
        <Resource
          name="GeneratedPage"
          list={GeneratedPageList}
          edit={GeneratedPageEdit}
          create={GeneratedPageCreate}
          show={GeneratedPageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
