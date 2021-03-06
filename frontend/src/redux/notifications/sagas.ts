import { all, takeEvery, put, call, select } from "redux-saga/effects";
import { notification } from "antd";

import actions from "./actions";
import { json } from "stream/consumers";

/* 
  interface ILoginSuccess set up
*/

export function* LOGIN({ payload }: { payload: any }) {
  const { email, password, resetStates } = payload;
  const { loading } = yield select((state) => state.account);

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: {
        ...loading,
        action: true,
      },
    },
  });

  /* const success: ILoginSuccess | false = yield call(
    loginService,
    email,
    password
  ) */

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: {
        ...loading,
        action: false,
      },
    },
  });
}

export function* REGISTER({ payload }: { payload: any }) {
  const { resetStates } = payload;

  const { loading } = yield select((state) => state.account);

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: {
        ...loading,
        action: true,
      },
    },
  });

  // const success: { message: string } | false = yield call(
  //   use jwt outright
  // payload
  // );

  // if (success) {
  //   if (resetStates) {
  //     resetStates();
  //   }

  // }

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: {
        ...loading,
        action: false,
      },
    },
  });
}

export function* RESET_PASSWORD({ payload }: { payload: any }) {
  const { password, cPassword, resetForm } = payload;
  const { loading } = yield select((state) => state.account);

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: {
        ...loading,
        action: false,
      },
    },
  });

  /* 
  registration success and interface implementation */

  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: {
        ...loading,
        action: false,
      },
    },
  });
}

export default function* rootSaga() {
  yield all([]);
}
