import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

import "./App.css";
import DefaultLayout from "components/Layout/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <Routes>
      {publicRoutes.map((item, index) => {
        // const Layout = item.layout === null ? Fragment : DefaultLayout;
        let Layout = DefaultLayout
        if(item.layout){
          Layout = item.layout
        }else if(item.layout === null){
          Layout = Fragment
        }
        return (
          <Route
            key={index}
            path={item.path}
            element={
              <Layout>
                <item.component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
