
import React, { useState,useContext,useReducer } from "react";
import { ComponentChildren } from "../types";
import { FC } from "react";


enum REDUCER_ACTION{
    SET_NAME,
    SET_AGE
  }
  
  interface actionType {
    type:REDUCER_ACTION,
    payload:any
  }
  interface stateType{
    name:string,
    age:string
  }
  const initialState:stateType={
    name:"",
    age:""
  }
  
  
  
  const setName =(payload:string) =>({
    type:REDUCER_ACTION.SET_NAME,
    payload
  })
  const setAge =(payload:string) =>({
    type:REDUCER_ACTION.SET_AGE,
    payload
  })
  const reducer = (state:stateType,action:actionType):stateType=>{
          switch (action.type) {
            case REDUCER_ACTION.SET_NAME:
              return {...state,name:action.payload}
     
              case REDUCER_ACTION.SET_AGE:
                return {...state,age:action.payload}
            default:
             return state;
          }
  }
  

const AuthContext = React.createContext({});
function AuthProvider ({ children }:{ children: ComponentChildren }){

    const [state,dispatch]=useReducer(reducer,initialState)

    const handleSetAge=()=>{
        dispatch(setAge("12"))
    }
    const handleSetName=()=>{
        dispatch(setAge("12"))
    }
    return (
        <AuthContext.Provider value={{state,handleSetAge,handleSetName}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
export {AuthContext}