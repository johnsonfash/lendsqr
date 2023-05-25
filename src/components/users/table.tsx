import {
  faChevronLeft,
  faChevronRight,
  faEllipsisVertical,
  faEye,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import Filter from "./filter";
import PopUp from "./popup";

function UserTable() {
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
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <>
                <tr key={i}>
                  <td className="no-break">Lendsqr</td>
                  <td className="no-break">Adedeji</td>
                  <td className="no-break">adedeji@lendsqr.com</td>
                  <td className="no-break">09036723177</td>
                  <td className="no-break">May 15, 2020 10:00 AM</td>
                  <td className="no-break">
                    <div className="inactive px-3 rounded-4">Inactive</div>
                  </td>
                  <td className="no-break">
                    <PopUp id={i + 1} />
                  </td>
                </tr>
                <tr key={i}>
                  <td className="no-break">Airbnb</td>
                  <td className="no-break">Debby Ogana</td>
                  <td className="no-break">debby@airbnb.com</td>
                  <td className="no-break">09065340451</td>
                  <td className="no-break">Apr 15, 2020 10:00 AM</td>
                  <td className="no-break">
                    <div className="active px-3 rounded-4">Active</div>
                  </td>
                  <td className="no-break">
                    <PopUp id={i + 1} />
                  </td>
                </tr>
                <tr key={i}>
                  <td className="no-break">Airbnb</td>
                  <td className="no-break">Debby Ogana</td>
                  <td className="no-break">debby@airbnb.com</td>
                  <td className="no-break">09065340451</td>
                  <td className="no-break">Jun 15, 2020 10:00 AM</td>
                  <td className="no-break">
                    <div className="pending px-3 rounded-4">Pending</div>
                  </td>
                  <td className="no-break">
                    <PopUp id={i + 1} />
                  </td>
                </tr>
                <tr key={i}>
                  <td className="no-break">Airbnb</td>
                  <td className="no-break">Debby Ogana</td>
                  <td className="no-break">debby@airbnb.com</td>
                  <td className="no-break">09065340451</td>
                  <td className="no-break">May 15, 2020 10:00 AM</td>
                  <td className="no-break">
                    <div className="blacklist px-3 rounded-4">Blacklisted</div>
                  </td>
                  <td className="no-break">
                    <PopUp id={i + 1} />
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </Table>
      <div className="d-flex flex-wrap py-2 align-items-center">
        <div className="d-flex align-items-center col-12 col-sm-6 pe-3">
          <span className="d-inline-block">Showing</span>
          <select className="form-select mx-2 py-0 max-w-5">
            <option value="">100</option>
            <option value="">500</option>
          </select>
          <span className="d-inline-block no-break">out of 100</span>
        </div>
        <div className="col-12 col-sm-6 mt-2 mt-sm-0 d-flex justify-content-md-end">
          <button className="btn btn-light">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <span className="d-inline-block">...</span>
          <button className="btn">15</button>
          <button className="btn">16</button>
          <button className="btn btn-light">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
