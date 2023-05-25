import {
  faCoins,
  faSackDollar,
  faUserGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import UserTable from "../../components/users/table";

function UsersPage() {
  return (
    <div className="users-page">
      <h5 className="px-2 mb-4">Users</h5>
      <div className="d-flex flex-wrap align-items-stretch">
        <div className="col-6 col-lg-3 p-2">
          <div className="p-4 h-100 rounded-2 shadow-md bg-white">
            <span className="d-inline-block fs-5 d-flex justify-content-center align-items-center rounded-circle users min-h-2-5 max-w-2-5 min-w-2-5">
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <div className="mt-2">
              <small>USERS</small>
              <h5 className="fw-bold mt-2">2,453</h5>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 p-2">
          <div className="p-4 h-100 rounded-2 shadow-md bg-white">
            <span className="d-inline-block fs-5 d-flex justify-content-center align-items-center rounded-circle active-users min-h-2-5 max-w-2-5 min-w-2-5">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <div className="mt-2">
              <small>ACTIVE USERS</small>
              <h5 className="fw-bold mt-2">2,453</h5>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 p-2">
          <div className="p-4 h-100 rounded-2 shadow-md bg-white">
            <span className="d-inline-block fs-5 d-flex users-loan justify-content-center align-items-center rounded-circle  min-h-2-5 max-w-2-5 min-w-2-5">
              <FontAwesomeIcon icon={faSackDollar} />
            </span>
            <div className="mt-2">
              <small>USERS WITH LOANS</small>
              <h5 className="fw-bold mt-2">12,453</h5>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 p-2">
          <div className="p-4 h-100 rounded-2 shadow-md bg-white">
            <span className="d-inline-block fs-5 d-flex users-savings justify-content-center align-items-center rounded-circle  min-h-2-5 max-w-2-5 min-w-2-5">
              <FontAwesomeIcon icon={faCoins} />
            </span>
            <div className="mt-2">
              <small>USERS WITH SAVINGS</small>
              <h5 className="fw-bold mt-2">102,453</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-5">
        <UserTable />
      </div>
    </div>
  );
}

export default UsersPage;
