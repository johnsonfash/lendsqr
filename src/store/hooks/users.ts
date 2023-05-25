import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { UserData, updateUsers } from "../../store/slices/users";
import reduxRequest from "../../services/request";
import { useSearchParams } from "react-router-dom";

const calculatePageButton = (page: number, size: number) => {
  const count = size / 10;
  if (count > 5) {
    if (page + 4 < count) {
      return [page, page + 1, page + 2, null, count - 1, count];
    } else {
      return [page - 1, page, page + 1, null, count - 1, count];
    }
  } else {
    return Array(count).fill(0).map((_, i) => i + 1)
  }
}

const useUsers = (auto = true) => {
  const http = useAppDispatch();
  const [users, setUsers] = useState<UserData[]>([])
  const [pageNumbers, setPageNumbers] = useState<(number | null)[]>([])
  const { loading, data } = useAppSelector((state) => state.users)

  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (loading === 'false' && data === null) {
      if (auto) http(reduxRequest('get', '/users', {}, updateUsers))
    }
  }, [data, loading, http, auto]);

  useEffect(() => {
    const page = Number(searchParams.get('p'));
    if (data) {
      if (page) {
        setPageNumbers(calculatePageButton(page, data.length));
        setUsers(data.slice(page * 10 - 10, page * 10))
      } else {
        setPageNumbers(calculatePageButton(1, data.length));
        setUsers(data.slice(0, 10))
      }
    }
  }, [searchParams, data])

  return { loading: loading === 'true', total: data?.length || 0, users, pageNumbers, page: Number(searchParams.get('p')) || 1 };
}

export default useUsers;