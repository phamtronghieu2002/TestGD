//1.define function components  ->ok
//2.props type   ->ok
//3.handle events  ->ok
//4.hooks    ->ok
//5.useContext
//6.useReducer ,useContext,redux toolkit
//7.routing  ->ok
//9.form components ->ok
//10. phan biet type và interface 
import React, { FC, useCallback, useMemo, useReducer } from "react";
import { useState, useRef } from "react";
import { StateDispatch } from "./types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { publicRoutes } from "./routes";
//react.memo

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
