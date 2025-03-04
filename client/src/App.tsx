import React from 'react';
import './App.css';
import AppFooter from "./components/footer/appFooter";
import AppHeader from "./components/header/appHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./pages/category";
import Home from "./pages/home";

function App() {
  return (
      <div className="flex-container">
          <BrowserRouter basename={`/SarthakBookstoreReact`}>
                  <AppHeader/>
              <div className="fill-me">
              <Routes>
                      <Route
                          path="/"
                          element={<Home/>}
                      />
                      <Route
                          path="/categories/:category_type?"
                          element={<Category />}
                      />
                      <Route
                          path="*"
                          element={<div>Page Not Found</div>}
                      />
                  </Routes>
              </div>
              <AppFooter/>
          </BrowserRouter>
      </div>
  );
}

export default App;
