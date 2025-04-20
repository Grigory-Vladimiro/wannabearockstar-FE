import React, { useEffect, useState } from "react";
import AlbumAdmin from "./admin/AlbumAdmin";
import ConcertAdmin from "./admin/ConcertAdmin";
import NewsAdmin from "./admin/NewsAdmin";

const AdminDashboard = () => {
  const [selected, setSelected] = useState("albums");

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
        <header className="app-header">
          <a className="app-header__logo" href="#">Vali Admin</a>
        </header>

        <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside className="app-sidebar">
          <ul className="app-menu">
            <li>
              <button className="app-menu__item" onClick={() => setSelected("albums")}>
                Albums Admin
              </button>
            </li>
            <li>
              <button className="app-menu__item" onClick={() => setSelected("concerts")}>
                Concerts Admin
              </button>
            </li>
            <li>
              <button className="app-menu__item" onClick={() => setSelected("news")}>
                News Admin
              </button>
            </li>
          </ul>
        </aside>

        <main className="app-content">
          <div className="app-title">
            <div>
              <h1>Admin Dashboard</h1>
              <p>Vali template in React</p>
            </div>
          </div>

          {selected === "albums" && <AlbumAdmin />}
          {selected === "concerts" && <ConcertAdmin />}
          {selected === "news" && <NewsAdmin />}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
