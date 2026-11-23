import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage"
import AdminPage from "./components/AdminPage";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectRoute";
import { UsersProvider } from "./contexts/UsersProvider";
import { TabProvider } from "./components/AdminPage/contexts";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <TabProvider>
            <AdminPage />
          </TabProvider>
        </ProtectedRoute>
      ),
    },
    {
      path: "/user",
      element: <UserPage />,
    },
  ]);

  return (
    <div className={styles.App}>
      <ToastContainer/>
      <UsersProvider>
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
      </UsersProvider>
    </div>
  );
}

export default App;
