import axios from "axios"
import { AppDispatch } from "../store"

const baseUrl = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1';
export interface DefaultAxiosResponse {
  data: {
    status: boolean
    message: string
    data: any
  }
}

export interface AnyReduxState<T> {
  error?: boolean
  errorMessage?: string
  loading?: 'true' | 'false' | 'done'
  data?: T | null
}

const reduxRequest = <T>(method: 'post' | 'get' | 'delete' | 'put' | 'patch' = 'post', url: string, data: { [key: string]: string }, reduxAction: (state: AnyReduxState<T>) => {
  payload: AnyReduxState<T>;
  type: string;
}) => async (dispatch: AppDispatch) => {
  try {
    dispatch(reduxAction({ loading: "true" }));
    const res = await axios({
      method: method,
      url: baseUrl + url,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.data) {
      dispatch(reduxAction({ loading: "done", error: false, data: res.data }));
    } else {
      dispatch(reduxAction({ loading: "done", error: true, errorMessage: 'Request failed' }));
    }
  } catch (e: any) {
    dispatch(reduxAction({ loading: "done", error: true, errorMessage: e?.response?.data?.message || e.message }));
  }
}

export default reduxRequest;