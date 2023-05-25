import { NumericFormat } from "react-number-format";
import { UserData } from "../../../store/slices/user";

function GeneralDetails({ data }: { data: UserData | null | undefined }) {
  return (
    <div className="shadow-sm my-4 rounded-3 bg-white p-4">
      <h6 className="mb-3">Personal Information</h6>
      <div className="d-flex flex-wrap border-bottom">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">FULL NAME</small>
          <div>{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">PHONE NUMBER</small>
          <div>{data?.phoneNumber}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">EMAIL ADDRESS</small>
          <div className="text-break">{data?.email}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">BVN</small>
          <div>{data?.profile?.bvn}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">GENDER</small>
          <div>{data?.profile?.gender}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">MARITAL STATUS</small>
          <div></div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">CHILDREN</small>
          <div></div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">TYPE OF RESIDENCE</small>
          <div></div>
        </div>
      </div>
      <h6 className="mb-3 mt-4">Education and Employment</h6>
      <div className="d-flex flex-wrap border-bottom">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">LEVEL OF EDUCATION</small>
          <div>{data?.education?.level}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">EMPLOYMENT STATUS</small>
          <div>{data?.education?.employmentStatus}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">SECTOR OF EMPLOYMENT</small>
          <div>{data?.education?.sector}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">DURATION OF EMPLOYMENT</small>
          <div>{data?.education?.duration}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">OFFICE EMAIL</small>
          <div>{data?.education?.officeEmail}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">MONTHLY INCOME</small>
          <div>
            <NumericFormat
              displayType="text"
              thousandSeparator=","
              value={
                data?.education?.monthlyIncome
                  ? data?.education?.monthlyIncome[0]
                  : 0
              }
              prefix="₦"
            />{" "}
            -{" "}
            <NumericFormat
              displayType="text"
              thousandSeparator=","
              value={
                data?.education?.monthlyIncome
                  ? data?.education?.monthlyIncome[1]
                  : 0
              }
              prefix="₦"
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">LOAN REPAYMENT</small>
          <div>
            <NumericFormat
              displayType="text"
              thousandSeparator=","
              value={data?.education?.loanRepayment}
            />
          </div>
        </div>
      </div>
      <h6 className="mb-3 mt-4">Socials</h6>
      <div className="d-flex flex-wrap border-bottom">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">TiWTTER</small>
          <div>{data?.socials?.twitter}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">FACEBOOK</small>
          <div>{data?.socials?.facebook}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">INSTAGRAM</small>
          <div>{data?.socials?.instagram}</div>
        </div>
      </div>
      <h6 className="mb-3 mt-4">Guarantor</h6>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">FULL NAME</small>
          <div>{`${data?.guarantor?.firstName} ${data?.guarantor?.lastName}`}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">PHONE NUMBER</small>
          <div>{data?.guarantor?.phoneNumber}</div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">EMAIL ADDRESS</small>
          <div className="text-break"></div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
          <small className="text-muted fs-7">RELATIONSHIP</small>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default GeneralDetails;
