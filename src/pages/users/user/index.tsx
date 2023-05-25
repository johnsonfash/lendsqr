import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeftLong,
  faStar as Star,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import GeneralDetails from "./general";
import useUser from "../../../store/hooks/user";
import { NumericFormat } from "react-number-format";
import { Alert, Spinner } from "reactstrap";

function User() {
  const { loading, error, data } = useUser();
  return (
    <div className="user-page">
      <Link to="/users" className="text-dark p-2">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span className="d-inline-block ms-3">Back to Users</span>
      </Link>
      {loading ? (
        <div className="my-5 pt-5 text-center">
          <Spinner size="md" />
        </div>
      ) : error ? (
        <div className="my-5 pt-5 text-center text-center">
          <Alert color="danger" className="d-inline-block py-1">
            Unable to fetch user!
          </Alert>
        </div>
      ) : (
        <div>
          <div className="px-2 mb-4 flex-wrap d-flex align-items-center justify-content-between">
            <h5 className="my-0 mt-4 me-3">User Details</h5>
            <div className="mt-4">
              <button className="btn btn-outline-danger me-3">
                <small>BLACKLIST USER</small>
              </button>
              <button className="btn  btn-outline-info text-main border-main">
                <small>ACTIVATE USER</small>
              </button>
            </div>
          </div>
          <div className="px-2 mt-4">
            <div className="shadow-sm rounded-3 bg-white pt-4 px-4">
              <div className="d-flex flex-wrap align-items-center  mb-4">
                <div className="d-flex align-items-center">
                  <div className="d-inline-flex fs-3 bg-light min-w-4 min-h-4 d-flex justify-content-center align-items-center rounded-circle border">
                    <div className="max-w-2 min-w-2 max-h-2 min-h-2 d-flex justify-content-center align-items-center rounded-circle overflow-hidden">
                      <img src={data?.profile?.avatar} alt="" className="" />
                    </div>
                  </div>
                  <div className="border-end ps-3 pe-4">
                    <h6>{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</h6>
                    <small className="text-muted">{data?.accountNumber}</small>
                  </div>
                </div>
                <div className="d-flex mt-4 mt-sm-0 align-items-center">
                  <div className="border-end pe-4 px-sm-4">
                    <small>User's Tier</small>
                    <div className="d-flex">
                      <span className="d-inline-block star">
                        <FontAwesomeIcon icon={Star} />
                      </span>
                      <span className="d-inline-block mx-1 star">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className="d-inline-block star">
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
                  </div>
                  <div className="px-4">
                    <h6>
                      <NumericFormat
                        displayType="text"
                        thousandSeparator=","
                        value={data?.accountBalance}
                        prefix='₦'
                      />
                    </h6>
                    <small className="text-muted">
                      8093892799 / Providous Bank
                    </small>
                  </div>
                </div>
              </div>
              <div className="overflow-slider">
                <span className="d-inline-block no-break link px-4 py-1 active">
                  General Details
                </span>
                <span className="d-inline-block link px-4 py-1 mx-lg-3">
                  Documents
                </span>
                <span className="d-inline-block link px-4 py-1 mx-lg-3 no-break">
                  Bank Details
                </span>
                <span className="d-inline-block link px-4 py-1 mx-lg-3">
                  Loans
                </span>
                <span className="d-inline-block link px-4 py-1 mx-lg-3">
                  Savings
                </span>
                <span className="d-inline-block link px-4 py-1 no-break">
                  App and System
                </span>
              </div>
            </div>
            <GeneralDetails  data={data}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
