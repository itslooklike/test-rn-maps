import { AsyncStorage } from 'react-native';
import { all, take, call, put } from 'redux-saga/effects';

import { IStoreState } from '../types';

// AsyncStorage:
// AsyncStorage.setItem('key', 'value');
// AsyncStorage.getItem('key');

export const moduleName = 'auth';

const SIGN_UP_REQUEST = `${moduleName}/SIGN_UP_REQUEST`;
const SIGN_UP_SUCCESS = `${moduleName}/SIGN_UP_SUCCESS`;
const SIGN_UP_ERROR = `${moduleName}/SIGN_UP_ERROR`;

type SIGN_UP_REQUEST = typeof SIGN_UP_REQUEST;
type SIGN_UP_SUCCESS = typeof SIGN_UP_SUCCESS;
type SIGN_UP_ERROR = typeof SIGN_UP_ERROR;

export interface ISignUp {
  type: SIGN_UP_REQUEST;
  payload: {
    token: string;
  };
  error?: any;
}

const initialState: IStoreState = {
  data: null,
  error: null,
  loading: false,
};

export default function reducer(state: IStoreState = initialState, action: ISignUp): IStoreState {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, error: null, data: { ...state.data, token: payload } };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error };

    default:
      return state;
  }
}

export function signUp(token: string): ISignUp {
  return { type: SIGN_UP_REQUEST, payload: { token } };
}

const signUpSaga = function*() {
  while (true) {
    const { payload } = yield take(SIGN_UP_REQUEST);

    try {
      AsyncStorage.setItem('token', payload.token);
      yield put({ type: SIGN_UP_SUCCESS, payload: payload.token });
    } catch (error) {
      yield put({ type: SIGN_UP_ERROR, error });
    }
  }
};

export const saga = function*() {
  yield all([signUpSaga()]);
};
