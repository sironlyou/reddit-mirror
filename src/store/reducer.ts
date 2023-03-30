import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { SET_TOKEN, SetTokenAction } from "./token/actions";
import { tokenReducer, TokenState } from "./token/reducer";

export type RootState = {
  token: TokenState;
  me: MeState;
};
const initialState: RootState = {
  token: {
    value: "",
    error: "",
  },
  me: {
    loading: false,
    error: "",
    data: {},
  },
};

type MyAction = SetTokenAction | MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    default:
      return state;
  }
};
