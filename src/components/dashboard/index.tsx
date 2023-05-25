import "./index.scss";
import logoSmall from "../../assets/lendsqr-icon-small.png";
import logoText from "../../assets/lendsqr-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faBasketShopping,
  faBriefcase,
  faChartSimple,
  faHandHoldingDollar,
  faHouseChimneyWindow,
  faMagnifyingGlass,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Outlet } from "react-router-dom";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledCollapse,
  UncontrolledDropdown,
} from "reactstrap";
import user from "../../assets/user.jpg";
import { businessLinks, customerLinks, settingLinks } from "./constants";

const leftNavClass = ({ isActive }: { isActive: boolean }) =>
  `d-block px-4 py-2 w-100 link text-dark ${isActive ? "active" : ""}`;

function Dashboard() {
  return (
    <main>
      <nav className="d-flex z-index-3 position-fixed top-0 bg-white w-100 start-0 end-0 shadow-sm top-nav align-items-center py-3">
        <div className="logo-area ps-3 d-flex align-items-start ps-md-4 pe-md-2">
          <label htmlFor="left-nav-control" className="me-3 btn p-0 d-md-none">
            <FontAwesomeIcon icon={faBars} className="fs-2" />
          </label>
          <Link to="/" className="d-flex text-dark">
            <span className="d-inline-block">
              <img src={logoSmall} alt="" className="max-w-1-5" />
            </span>
            <span className="ms-2 d-none d-md-inline-block">
              <img src={logoText} alt="" className="max-w-8" />
            </span>
          </Link>
        </div>
        <div className="d-flex justify-content-end w-100 px-3 px-lg-5">
          <form className="d-none d-sm-flex align-items-center w-60 w-md-40 ms-2 ms-md-0">
            <input
              type="text"
              placeholder="Search for anything"
              className="form-control rounded-0 rounded-start"
            />
            <button
              type="submit"
              className="btn px-3 btn-info bg-main text-white rounded-0 rounded-end"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <div className="d-flex align-items-center w-40 w-md-60 justify-content-end">
            <button className="btn me-2 d-sm-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fs-5" />
            </button>
            <Link to="/docs" className="text-decoration-underline text-dark">
              Docs
            </Link>
            <button className="btn ms-2">
              <FontAwesomeIcon icon={faBell} className="fs-5" />
            </button>
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                tag="div"
                className="pointer d-flex align-items-center user-select-none"
              >
                <div className="max-w-2-5 min-w-2-5 me-1 me-md-3 ms-1 border rounded-circle overflow-hidden">
                  <img src={user} alt="" />
                </div>
                <span className="d-inline-block d-none d-md-inline-block">
                  Adedeji
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3">
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Settings</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </nav>
      <div>
        <input type="checkbox" className="d-none" id="left-nav-control" />
        <nav className="side-nav z-index-3 bg-white pt-4 shadow-sm position-fixed bottom-0 overflow-auto">
          <div className="mb-4">
            <button className="btn px-4 w-100 text-start" id="toggler">
              <span className="d-inline-block max-w-1-5 min-w-1-5">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <span className="d-inline-block ms-1 me-2">
                Switch Organization
              </span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <UncontrolledCollapse toggler="#toggler">
              <div>
                <NavLink to="/product" className={leftNavClass}>
                  <span className="ms-2 d-inline-block max-w-1-5 min-w-1-5">
                    <FontAwesomeIcon icon={faBasketShopping} />
                  </span>
                  <span className="d-inline-block ms-1">Product</span>
                </NavLink>
                <NavLink to="/marketing" className={leftNavClass}>
                  <span className="ms-2 d-inline-block max-w-1-5 min-w-1-5">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </span>
                  <span className="d-inline-block ms-1">Marketing</span>
                </NavLink>
                <NavLink to="/finance" className={leftNavClass}>
                  <span className="ms-2 d-inline-block max-w-1-5 min-w-1-5">
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                  </span>
                  <span className="d-inline-block ms-1">Finance</span>
                </NavLink>
                <NavLink to="/logistics" className={leftNavClass}>
                  <span className="ms-2 d-inline-block max-w-1-5 min-w-1-5">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </span>
                  <span className="d-inline-block ms-1">Logistics</span>
                </NavLink>
              </div>
            </UncontrolledCollapse>
          </div>
          <NavLink to="/" className={leftNavClass}>
            <span className="d-inline-block max-w-1-5 min-w-1-5">
              <FontAwesomeIcon icon={faHouseChimneyWindow} />
            </span>
            <span className="d-inline-block ms-1">Dashboard</span>
          </NavLink>
          <div className="mt-4">
            <small className="d-block px-4 mb-2">CUSTOMERS</small>
            {customerLinks.map((item, i) => (
              <NavLink to={item.link} key={item.link} className={leftNavClass}>
                <span className="d-inline-block max-w-1-5 min-w-1-5">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="d-inline-block ms-1">{item.text}</span>
              </NavLink>
            ))}
          </div>
          <div className="mt-4">
            <small className="d-block px-4 mb-2">BUSINESSES</small>
            {businessLinks.map((item, i) => (
              <NavLink to={item.link} key={item.link} className={leftNavClass}>
                <span className="d-inline-block max-w-1-5 min-w-1-5">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="d-inline-block ms-1">{item.text}</span>
              </NavLink>
            ))}
          </div>
          <div className="mt-4">
            <small className="d-block px-4 mb-2">SETTINGS</small>
            {settingLinks.map((item, i) => (
              <NavLink to={item.link} key={item.link} className={leftNavClass}>
                <span className="d-inline-block max-w-1-5 min-w-1-5">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="d-inline-block ms-1">{item.text}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <section className="content px-2 py-4 px-md-3 py-md-4 p-lg-5 ms-auto position-relative">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
