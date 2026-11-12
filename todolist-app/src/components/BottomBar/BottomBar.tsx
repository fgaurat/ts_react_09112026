import React from "react";

function BottomBar() {
  return (
    <>
      {/* <!-- ===================== COMPOSANT : BottomBar ===================== --> */}
      <footer className="bg-white border-top px-3 py-2 d-flex flex-wrap justify-content-between align-items-center gap-2 small text-secondary">
        <span>© 2026 TaskBoard – v1.0.0</span>
        <span>
          <i
            className="bi bi-circle-fill text-success me-1"
            // style="font-size: 0.5rem; vertical-align: middle"
            style={{ fontSize: "0.5rem", verticalAlign: "middle" }}
          ></i>
          Données : JSONPlaceholder
        </span>
        <div className="d-flex gap-3">
          <a href="#" className="link-secondary">
            Aide
          </a>
          <a href="#" className="link-secondary">
            Mentions légales
          </a>
        </div>
      </footer>
      {/* <!-- =================== FIN COMPOSANT : BottomBar =================== --> */}
    </>
  );
}

export default BottomBar;
