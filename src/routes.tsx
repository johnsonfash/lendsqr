import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/page404";
import Dashboard from "./components/dashboard";
import IndexPage from "./pages/index";
import Login from "./pages/login";
import UsersPage from "./pages/users";
import User from "./pages/users/user";

function Router() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<IndexPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route element={<Login />} path="/login" />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
