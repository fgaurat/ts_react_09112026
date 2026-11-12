import React from "react";

function TopBar() {
  return (
    <>
      {/* <!-- ===================== COMPOSANT : TopBar ===================== --> */}
      <header className="navbar bg-white border-bottom px-3 py-2">
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-outline-secondary d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
            aria-label="Ouvrir le menu"
          >
            <i className="bi bi-list"></i>
          </button>
          <h1 className="h5 mb-0">Tâches</h1>
        </div>

        {/* <!-- COMPOSANT : SearchBar --> */}
        <form
          className="d-none d-md-flex flex-grow-1 mx-4"
          role="search"
          //   style="max-width: 420px"
          style={{ maxWidth: "420px" }}
        >
          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              className="form-control border-start-0"
              type="search"
              placeholder="Rechercher une tâche"
              aria-label="Rechercher une tâche"
            />
          </div>
        </form>

        {/* <!-- COMPOSANT : UserMenu --> */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-light position-relative"
            type="button"
            aria-label="Notifications"
          >
            <i className="bi bi-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none text-body dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center me-2"
                // style="width: 32px; height: 32px"
                style={{ width: "32px", height: "32px" }}
              >
                CM
              </span>
              <span className="d-none d-sm-inline">Claire Martin</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Mon profil
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Se déconnecter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* <!-- =================== FIN COMPOSANT : TopBar =================== --> */}
    </>
  );
}

export default TopBar;
