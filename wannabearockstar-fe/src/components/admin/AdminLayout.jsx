import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/admin/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/admin/css/main.css" />
      <link rel="stylesheet" href="/admin/css/font-awesome.min.css" />

      <div className="app sidebar-mini">
        {/* Header */}
        <header className="app-header">
          <a className="app-header__logo" href="#">Vali Admin</a>
        </header>

        {/* Sidebar */}
        <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside className="app-sidebar">
          <ul className="app-menu">
            <li>
              <a className="app-menu__item" href="/admin/albums">
                <i className="app-menu__icon fa fa-music"></i>
                <span className="app-menu__label">Albums</span>
              </a>
            </li>
            <li>
              <a className="app-menu__item" href="/admin/concerts">
                <i className="app-menu__icon fa fa-calendar"></i>
                <span className="app-menu__label">Concerts</span>
              </a>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
