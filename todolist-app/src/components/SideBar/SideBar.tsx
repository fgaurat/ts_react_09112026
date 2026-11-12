import React from 'react'

function SideBar() {
  return (
    <>
      {/* <!-- ===================== COMPOSANT : Sidebar ===================== --> */}
      <aside
        className="app-sidebar offcanvas-lg offcanvas-start bg-dark text-white"
        tabIndex={-1}
        id="sidebar"
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <span className="fs-5 fw-semibold"
            ><i className="bi bi-check2-square me-2"></i>TaskBoard</span
          >
          <button
            type="button"
            className="btn-close btn-close-white d-lg-none"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebar"
            aria-label="Fermer le menu"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-3">
          {/* <!-- COMPOSANT : SidebarMenu (liste de SidebarItem) --> */}
          <ul className="nav nav-pills flex-column gap-1 mb-auto">
            {/* <!-- COMPOSANT : SidebarItem (icône, libellé, actif) --> */}
            <li className="nav-item">
              <a href="#" className="nav-link"
                ><i className="bi bi-speedometer2 me-2"></i>Tableau de bord</a
              >
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page"
                ><i className="bi bi-list-check me-2"></i>Tâches</a
              >
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"
                ><i className="bi bi-people me-2"></i>Utilisateurs</a
              >
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"
                ><i className="bi bi-file-text me-2"></i>Articles</a
              >
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"
                ><i className="bi bi-images me-2"></i>Albums</a
              >
            </li>
          </ul>

          <hr className="border-secondary" />
          <a href="#" className="nav-link"
            ><i className="bi bi-gear me-2"></i>Paramètres</a
          >
        </div>
      </aside>
      {/* <!-- =================== FIN COMPOSANT : Sidebar =================== --> */}

    </>
  )
}

export default SideBar