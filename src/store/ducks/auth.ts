import { all, take, call, put } from 'redux-saga/effects';

export const moduleName = 'auth';

const SIGN_UP_REQUEST = `${moduleName}/SIGN_UP_REQUEST`;
const SIGN_UP_SUCCESS = `${moduleName}/SIGN_UP_SUCCESS`;
const SIGN_UP_ERROR = `${moduleName}/SIGN_UP_ERROR`;

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default function reducer(state = initialState, action: any) {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, error: null, user: payload.user };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error };

    default:
      return state;
  }
}

export function signUp(email: string, password: string) {
  return { type: SIGN_UP_REQUEST, payload: { email, password } };
}

const signUpSaga = function*() {
  while (true) {
    const { payload } = yield take(SIGN_UP_REQUEST);

    try {
      // const user = yield call();
      const user = 'dsdsdsdsfds';

      yield put({ type: SIGN_UP_SUCCESS, payload: { user } });
    } catch (error) {
      yield put({ type: SIGN_UP_ERROR, error });
    }
  }
};

export const saga = function*() {
  yield all([signUpSaga()]);
};
