import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./shared/NotFound";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Routes>
                <Route path="/posts/*" element={<CardsList />}></Route>
                <Route path="/auth" element={<CardsList />}></Route>
                <Route path="/" element={<Navigate to={"/posts"} />}></Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </Provider>
  );
}
///
export const App = hot(() => <AppComponent />);
