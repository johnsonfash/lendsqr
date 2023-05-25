import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { updateOneUser } from "../../store/slices/user";
import reduxRequest from "../../services/request";
import { useParams } from "react-router-dom";

const useUser = (auto = true) => {
  const http = useAppDispatch();
  const { loading, data, error } = useAppSelector((state) => state.user)

  const { id } = useParams()

  useEffect(() => {
    if ((loading === 'false' && data === null) || (data && data.id !== id)) {
      if (auto) http(reduxRequest('get', `/users/${id}`, {}, updateOneUser))
    }
  }, [data, loading, http, auto, id]);

  return { loading: loading === 'true', data, error };
}

export default useUser;