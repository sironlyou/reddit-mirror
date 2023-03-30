import { SET_TOKEN, SET_TOKEN_ERROR, SetTokenAction, SetTokenErrorAction } from "./actions";
import { Reducer } from "react";

export type TokenState = {
  value: string;
  error: string;
};

type tokenActions = SetTokenAction | SetTokenErrorAction;

export const tokenReducer: Reducer<TokenState, tokenActions> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        value: action.value,
        error: "",
      };
    case SET_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
