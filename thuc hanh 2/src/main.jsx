import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import UsersLayout from "./routes/users/UsersLayout";
import UsersList from "./routes/users/UsersList";
import UserDetail from "./routes/users/UserDetail";
import EditUser from "./routes/users/EditUser";
import { RequireAuth } from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      {
        path: "users",
        element: <UsersLayout />,
        children: [
          { index: true, element: <UsersList /> },
          { path: ":userId", element: <UserDetail /> },
          {
            path: ":userId/edit",
            element: (
              <RequireAuth>
                <EditUser />
              </RequireAuth>
            ),
          },
        ],
      },
    ],
  },
]);

function Main() {
  return <RouterProvider router={router} />;
}

export default Main;
