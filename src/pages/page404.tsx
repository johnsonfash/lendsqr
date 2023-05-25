import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="w-100 d-flex mt-5 pt-5 justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-3 fw-bold">404</h1>
        <h6 className="mb-4">Page not found!</h6>
        <Link to="/users" className="btn btn-info bg-main text-white">
          Go back users
        </Link>
      </div>
    </div>
  );
}

export default Page404;
