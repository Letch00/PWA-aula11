import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectRoute";

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
          <AdminPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
