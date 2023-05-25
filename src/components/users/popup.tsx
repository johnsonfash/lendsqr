import {
  faEllipsisVertical,
  faEye,
  faUserCheck,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

function PopUp({ id }: { id: number }) {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="div" className="pointer">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem className="py-0">
          <Link className="text-dark py-2 d-block" to={`/users/${id}`}>
            <span className="d-inline-block min-w-2">
              <FontAwesomeIcon icon={faEye} />
            </span>
            View Details
          </Link>
        </DropdownItem>
        <DropdownItem className="py-2">
          <span className="d-inline-block min-w-2">
            <FontAwesomeIcon icon={faUserXmark} />
          </span>
          Blacklist User
        </DropdownItem>
        <DropdownItem className="py-2">
          <span className="d-inline-block min-w-2">
            <FontAwesomeIcon icon={faUserCheck} />
          </span>
          Activate User
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default PopUp;
