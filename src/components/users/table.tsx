import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Spinner, Table } from "reactstrap";
import Filter from "./filter";
import PopUp from "./popup";
import useUsers from "../../store/hooks/users";
import { Link } from "react-router-dom";

function UserTable() {
  const { loading, users, pageNumbers, page, total } = useUsers();

  return (
    <div className="border-top rounded-3 overflow-hidden">
      <Table
        responsive
        color="light"
        className="table bg-white shadow-md rounded-3"
      >
        <thead>
          <tr>
            <th>
              <Filter title="ORGANIZATION" />
            </th>
            <th>
              <Filter title="USERNAME" />
            </th>
            <th>
              <Filter title="EMAIL" />
            </th>
            <th>
              <Filter title="PHONE NUMBER" />
            </th>

            <th>
              <Filter title="DATE JOINED" />
            </th>
            <th>
              <Filter title="STATUS" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="text-center my-4 position-absolute w-100">
              <Spinner size="sm" />
            </div>
          ) : users ? (
            users?.map((item, i) => (
              <tr key={i}>
                <td className="no-break text-capitalize">{item.orgName}</td>
                <td className="no-break text-capitalize">{`${item.profile?.firstName} ${item.profile?.lastName}`}</td>
                <td className="no-break text-lowercase">{item.email}</td>
                <td className="no-break">{item.phoneNumber}</td>
                <td className="no-break">{item.createdAt}</td>
                <td className="no-break">
                  <div className="inactive px-3 rounded-4">Inactive</div>
                </td>
                <td className="no-break">
                  <PopUp id={item.id} />
                </td>
              </tr>
            ))
          ) : (
            <div className="text-center my-4 position-absolute w-100">
              <Alert color="danger">No data available</Alert>
            </div>
          )}
        </tbody>
      </Table>
      <div className="d-flex flex-wrap py-2 align-items-center">
        <div className="d-flex align-items-center col-12 col-sm-6 pe-3">
          <span className="d-inline-block">Showing</span>
          <select className="form-select mx-2 py-0 max-w-5">
            <option value="">10</option>
          </select>
          <span className="d-inline-block no-break">out of {total}</span>
        </div>
        <div className="col-12 col-sm-6 mt-2 mt-sm-0 d-flex justify-content-md-end">
          <Link
            to={`/users?p=${page > 1 ? page - 1 : page}`}
            className="btn btn-light"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          {pageNumbers?.map((num, i) =>
            num ? (
              <Link to={`/users?p=${num}`} key={i} className="btn">
                {num}
              </Link>
            ) : (
              <button className="btn">...</button>
            )
          )}
          <Link
            to={`/users?p=${page * 10 < total ? page + 1 : page}`}
            className="btn btn-light"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
