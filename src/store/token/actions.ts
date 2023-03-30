import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import axios from "axios";
import { useSelector } from "react-redux";

const CLIENT_ID = "TtTT3iNgIdJIJ1X2EwAlBA";
export const SET_TOKEN = "SET_TOKEN";
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  value: string;
};
export const setToken: ActionCreator<SetTokenAction> = (value) => ({
  type: SET_TOKEN,
  value,
});

export const SET_TOKEN_ERROR = "SET_TOKEN_ERROR";
export type SetTokenErrorAction = {
  type: typeof SET_TOKEN_ERROR;
  error: string;
};
export const setTokenError: ActionCreator<SetTokenErrorAction> = (error: string) => ({
  type: SET_TOKEN_ERROR,
  error,
});

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  if (!CLIENT_ID || getState().token.value) return;
  let query = new URLSearchParams(document.location.search);
  let code = query.get("code");
  let pathname = document.location.pathname;
  if (pathname !== "/auth") return;

  axios
    .post("https://www.reddit.com/api/v1/access_token", `grant_type=authorization_code&code=${code}&redirect_uri=https://reddit-mirror.onrender.com/auth`, {
      auth: { username: CLIENT_ID, password: "ECtgFqN-8hFphYBAqVJaZBzU-VsRcQ" },
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
    .then(({ data }) => {
      dispatch(setToken(data["access_token"]));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setTokenError(String(error)));
    });
};
