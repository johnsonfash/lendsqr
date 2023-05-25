import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

function Filter({ title }: { title: string }) {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="div" className="pointer no-break">
        <small className="d-inline-block">{title}</small>
        <span className="d-inline-block ms-2">
          <FontAwesomeIcon icon={faSort} />
        </span>
      </DropdownToggle>
      <DropdownMenu className="z-index-2 mt-2 shadow-md p-3 dropdown-menu rounded-2">
        <form className="table-dropdown">
          <p className="mb-1">Organization</p>
          <select name="" id="" className="form-select">
            <option value="">Select</option>
          </select>
          <p className="mt-3 mb-1">Username</p>
          <input type="text" placeholder="User" className="form-control" />
          <p className="mt-3 mb-1">Email</p>
          <input type="email" placeholder="Email" className="form-control" />
          <p className="mt-3 mb-1">Date</p>
          <input type="date" placeholder="Date" className="form-control" />
          <p className="mt-3 mb-1">Phone Number</p>
          <input
            type="text"
            placeholder="Phone Number"
            className="form-control"
          />
          <p className="mt-3 mb-1">Status</p>
          <select name="" id="" className="form-select">
            <option value="">Select</option>
          </select>
          <div className="mt-4 d-flex justify-content-between">
            <button className="btn w-45 btn-outline-secondary">Reset</button>
            <button className="btn w-45 btn-info bg-main text-white">
              Filter
            </button>
          </div>
        </form>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default Filter;
