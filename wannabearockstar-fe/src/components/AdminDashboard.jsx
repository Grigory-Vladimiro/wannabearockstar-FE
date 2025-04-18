import React, { useEffect } from "react";

const AdminDashboard = () => {
  useEffect(() => {
    // Load the external JavaScript file
    const script1 = document.createElement("script");
    script1.src = "/admin/js/main.js";
    script1.async = true;
    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/admin/css/main.css" />
      <link rel="stylesheet" href="/admin/css/font-awesome.min.css" />

      <div className="app sidebar-mini">
        <header className="app-header">
          <a className="app-header__logo" href="#">Vali Admin</a>
        </header>

        <main className="app-content">
          <div className="app-title">
            <div>
              <h1>Admin Dashboard</h1>
              <p>Vali template in React</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
